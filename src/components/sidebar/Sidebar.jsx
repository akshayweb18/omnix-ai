// import React from "react";
// import { Home, MessageCircle, Settings, LogOut } from "lucide-react";

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Home", icon: <Home size={20} /> },
//     { name: "Chats", icon: <MessageCircle size={20} /> },
//     { name: "Settings", icon: <Settings size={20} /> },
//     { name: "Logout", icon: <LogOut size={20} /> },
//   ];

//   return (
//     <div className="flex flex-col w-64 h-screen bg-white border-r border-gray-200 shadow-lg">
//       {/* Logo */}
//       <div className="flex items-center justify-center h-20 border-b border-gray-200">
//         <h1 className="text-xl font-bold text-indigo-600">OmniX AI</h1>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 px-4 py-6">
//         {menuItems.map((item) => (
//           <button
//             key={item.name}
//             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors"
//           >
//             {item.icon}
//             <span className="font-medium">{item.name}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="px-4 py-4 border-t border-gray-200">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//           <div>
//             <p className="text-sm font-semibold">Akshay R.</p>
//             <p className="text-xs text-gray-500">Online</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
