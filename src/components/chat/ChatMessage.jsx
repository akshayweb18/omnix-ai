"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      } animate-fadeIn`}
    >
      <div
        className={`flex items-start gap-4 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`
            w-9 h-9 rounded-full flex items-center justify-center
            text-xs font-semibold text-white shadow-md flex-shrink-0
            ${
              isUser
                ? "bg-gray-400"
                : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            }
          `}
        >
          {isUser ? "U" : "AI"}
        </div>

        {/* Message Container */}
        <div className="group relative max-w-[650px]">

          {/* Bubble */}
          <div
            className={`
              px-5 py-3 rounded-2xl text-[15px] leading-relaxed
              transition-all duration-300
              ${
                isUser
                  ? "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
                  : "bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800 shadow-sm"
              }
            `}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 mb-2 space-y-1">
                    {children}
                  </ol>
                ),
                code({ inline, children }) {
                  return inline ? (
                    <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ) : (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-3">
                      <code>{children}</code>
                    </pre>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-2">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>

          {/* Hover Copy Button */}
          {!isUser && (
            <button
              onClick={handleCopy}
              className="absolute -bottom-6 left-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-gray-700"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}









// "use client";

// import { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// export default function ChatMessage({ message }) {
//   const isUser = message.role === "user";
//   const [copied, setCopied] = useState(false);

//   // 🕒 Format Time + Date
//   const now = new Date();
//   const formattedTime = now.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   const formattedDate = now.toLocaleDateString([], {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const handleCopy = () => {
//     navigator.clipboard.writeText(message.content);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div
//       className={`w-full flex ${
//         isUser ? "justify-end" : "justify-start"
//       } animate-fadeIn`}
//     >
//       <div
//         className={`flex items-start gap-4 ${
//           isUser ? "flex-row-reverse" : ""
//         }`}
//       >
//         {/* Avatar */}
//         <div
//           className={`
//             w-9 h-9 rounded-full flex items-center justify-center
//             text-xs font-semibold text-white shadow-md flex-shrink-0
//             ${
//               isUser
//                 ? "bg-gray-400"
//                 : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
//             }
//           `}
//         >
//           {isUser ? "U" : "AI"}
//         </div>

//         {/* Message Container */}
//         <div className="group relative max-w-[650px]">

//           {/* Bubble */}
//           <div
//             className={`
//               px-5 py-3 rounded-2xl text-[15px] leading-relaxed
//               transition-all duration-300
//               ${
//                 isUser
//                   ? "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 dark:from-neutral-800 dark:to-neutral-700 dark:text-white"
//                   : "bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-200"
//               }
//             `}
//           >
//             <ReactMarkdown
//               remarkPlugins={[remarkGfm]}
//               components={{
//                 p: ({ children }) => (
//                   <p className="mb-2 last:mb-0">{children}</p>
//                 ),
//                 ul: ({ children }) => (
//                   <ul className="list-disc pl-5 mb-2 space-y-1">
//                     {children}
//                   </ul>
//                 ),
//                 ol: ({ children }) => (
//                   <ol className="list-decimal pl-5 mb-2 space-y-1">
//                     {children}
//                   </ol>
//                 ),
//                 code({ inline, children }) {
//                   return inline ? (
//                     <code className="bg-gray-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">
//                       {children}
//                     </code>
//                   ) : (
//                     <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-3">
//                       <code>{children}</code>
//                     </pre>
//                   );
//                 },
//                 blockquote: ({ children }) => (
//                   <blockquote className="border-l-4 border-gray-300 dark:border-neutral-600 pl-4 italic text-gray-600 dark:text-gray-400 my-2">
//                     {children}
//                   </blockquote>
//                 ),
//               }}
//             >
//               {message.content}
//             </ReactMarkdown>
//           </div>

//           {/* 🕒 Timestamp */}
//           <div
//             className={`mt-1 text-[11px] text-gray-400 ${
//               isUser ? "text-right" : "text-left"
//             }`}
//           >
//             {formattedTime} • {formattedDate}
//           </div>

//           {/* Hover Copy Button */}
//           {!isUser && (
//             <button
//               onClick={handleCopy}
//               className="absolute -bottom-6 left-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-gray-700 dark:hover:text-white"
//             >
//               {copied ? "Copied ✓" : "Copy"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }