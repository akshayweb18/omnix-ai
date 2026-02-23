"use client";

import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = { role: "user", content: text };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // --- Custom Creator Response ---
    const lowerText = text.toLowerCase().trim();
    if (
      lowerText.includes("who made you") ||
      lowerText.includes("who developed you") ||
      lowerText.includes("your creator")
    ) {
      const botMessage = {
        role: "assistant",
        content: "I was made by Akshay Chaudhari.",
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
      return; // skip API call
    }

    // --- Normal API call ---
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: text
        }),
      });

      const data = await res.json();

      const botMessage = {
        role: "assistant",
        content: data?.content || "Server busy. Please try again.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I’m having trouble responding right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
}