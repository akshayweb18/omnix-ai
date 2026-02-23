"use client";

import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { useChat } from "@/hooks/useChat";
import { useSpeech } from "@/hooks/useSpeech";

export default function ChatLayout() {
  const { messages, sendMessage, loading } = useChat();
  const { speak } = useSpeech();
  const bottomRef = useRef(null);

 useEffect(() => {
  if (!messages.length) return;

  const lastMessage = messages[messages.length - 1];

  if (lastMessage.role === "assistant") {
    speak(lastMessage.content);
  }

  return () => {
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
  };
}, [messages, speak]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-white">

      {/* Header */}
      <ChatHeader />

      {/* Chat Area */}
      <div className="relative flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto w-full px-4 py-8 space-y-6">
          
          {/* Empty State */}
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center text-center mt-24 animate-fadeIn">
              
              {/* <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg mb-6" /> */}
              <div className="relative w-16 h-16 mb-6">
  {/* Outer Glow */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-60 animate-pulse"></div>

  {/* Main Circle */}
  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
    
    {/* Moving Gradient Layer */}
    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.blue.500),theme(colors.purple.500),theme(colors.pink.500),theme(colors.blue.500))] animate-spin-slow"></div>

    {/* Inner Glass Layer */}
    <div className="absolute inset-1 rounded-full bg-black/20 backdrop-blur-md"></div>

    {/* Center Core */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-80"></div>
    </div>

  </div>
</div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                How can I help you today?
              </h2>
              
              <p className="text-gray-500 text-sm max-w-md">
                Ask anything — explanations, coding help, ideas, or creative writing.
              </p>
            </div>
          )}

          {/* Messages */}
          <ChatList messages={messages} />
          {loading && <TypingIndicator />}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />

    </div>
  );
}
