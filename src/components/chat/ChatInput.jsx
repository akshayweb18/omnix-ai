"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="w-full bg-white border-t border-gray-200 py-4">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 shadow-sm focus-within:shadow-md transition-all duration-200">
          
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask Omnix..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />

<button
  onClick={handleSend}
  className="
    ml-3 flex items-center justify-center
    w-11 h-11
    rounded-full
    bg-gradient-to-r from-blue-600 to-indigo-600
    text-white
    shadow-md
    transition-all duration-300
    hover:shadow-xl
    hover:scale-105
    active:scale-95
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>



        </div>
      </div>
    </div>
  );
}
