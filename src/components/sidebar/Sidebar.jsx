"use client";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col p-4">
      
      {/* Logo */}
      <div className="text-xl font-semibold mb-8">
        OMNIX
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-3">

        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
          🏠 Home
        </button>

        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
          💬 Chats
        </button>

        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
          ⚙ Settings
        </button>

      </div>

      {/* Bottom */}
      <div className="mt-auto text-xs text-gray-400">
        Made by Akshay
      </div>

    </div>
  );
}