"use client";

import { useState } from "react";
import useVoice from "@/hooks/useVoice";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const { listening, startListening, stopListening } = useVoice((wakeText) => {
    if (!wakeText.trim()) return;
    onSend(`You said: "${wakeText}"`);
  });

  const handleSend = () => {
    if (!text.trim()) return;
    // Stop any ongoing speech when sending new message
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
    onSend(text);
    setText("");
  };

  const handleInputClick = () => {
    // Stop any ongoing speech when user clicks input
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    // Stop any ongoing speech when user starts typing
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
  };

  const handleMicClick = () => {
    if (listening) {
      stopListening();
      return;
    }

    startListening();

    // Auto stop after 3 seconds
    setTimeout(() => {
      stopListening();
    }, 3000);
  };

  return (
    <div className="w-full bg-white border-t border-gray-200 py-3">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm transition-all duration-300">

          {/* Input */}
          <input
            value={text}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask Omnix..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />

          {/* 🎙️ Mic Button */}
          <button
            onClick={handleMicClick}
            aria-label={listening ? "Stop listening" : "Start voice input"}
            className={`
              relative ml-2 w-11 h-11 rounded-full
              flex items-center justify-center
              transition-all duration-700 ease-in-out
              backdrop-blur-md
              ${
                listening
                  ? "bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30 scale-110"
                  : "bg-white text-gray-700 border border-gray-200 shadow-md scale-100"
              }
            `}
          >
            {/* Animated Pulse Ring */}
            {listening && (
              <span className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-75" />
            )}

            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`relative z-10 w-5 h-5 transition-all duration-700 ${
                listening ? "scale-110 opacity-100" : "scale-90 opacity-70"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3zm5-3a1 1 0 10-2 0 3 3 0 11-6 0 1 1 0 10-2 0 5 5 0 0010 0zm-5 9a1 1 0 001-1v-3h-2v3a1 1 0 001 1z" />
            </svg>
          </button>

          {/* 🚀 Send Button */}
          <button
            onClick={handleSend}
            className="
              ml-2 w-9 h-9 rounded-full flex items-center justify-center
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white
              shadow-sm
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
              active:scale-95
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}