"use client";

import { useState } from "react";
import { useChat } from "@/hooks/useChat";

export default function ChatHeader() {
  const [open, setOpen] = useState(false);
  const { resetChat } = useChat(); // 🔥 Only added this

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="h-16 flex items-center justify-between px-6 max-w-6xl mx-auto">

        {/* Left Section */}
{/* Left Section */}
<div className="flex flex-col justify-center h-full leading-tight">
  <img
    className=" w-45 object-contain"
    src="/omnixicon.png"
    alt="Omnix AI Logo"
  />
  {/* <span className="text-[10px] text-gray-500 -mt-1">
    Advanced Intelligence Model
  </span> */}
</div>
        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Online Status */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Online
          </div>

          {/* Action Button + Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-xl
                bg-gray-100/70 dark:bg-gray-800/70
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-all duration-300
                flex items-center justify-center
                text-gray-600 dark:text-gray-300
                hover:scale-105 active:scale-95
                backdrop-blur-md"
            >
              <span className="text-lg"><img className="w-5" src="../edit.png" alt="" /></span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl p-2 border border-gray-200">
                <button
                  onClick={() => {
                    resetChat(); // 🔥 This clears old messages
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  ➕ New Chat
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Elegant Gradient Divider */}
      <div className="h-[1px] bg-gradient-to-r 
        from-transparent via-gray-300/60 to-transparent" />
    </div>
  );
}