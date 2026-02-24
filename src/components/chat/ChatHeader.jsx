export default function ChatHeader() {
  return (
    <div className="sticky top-0 z-50 
      bg-white
      shadow-sm">

      <div className="h-16 flex items-center justify-between px-6 max-w-6xl mx-auto">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Premium Logo */}
          <div className="relative">
            <div className="w-9 h-9 rounded-xl 
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
              shadow-lg shadow-purple-500/20
              flex items-center justify-center
              text-white text-sm font-bold tracking-wide">
              O
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl 
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
              blur-xl opacity-30 -z-10" />
          </div>

          {/* Title */}
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold 
              text-gray-900 dark:text-white tracking-tight">
             OMNIX - AI
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Advanced Intelligence Model
            </span>
          </div>

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

          {/* Action Button */}
          <button className="w-10 h-10 rounded-xl
            bg-gray-100/70 dark:bg-gray-800/70
            hover:bg-gray-200 dark:hover:bg-gray-700
            transition-all duration-300
            flex items-center justify-center
            text-gray-600 dark:text-gray-300
            hover:scale-105 active:scale-95
            backdrop-blur-md">
            <span className="text-lg">⋯</span>
          </button>

        </div>

      </div>

      {/* Elegant Gradient Divider */}
      <div className="h-[1px] bg-gradient-to-r 
        from-transparent via-gray-300/60 dark:via-gray-700 to-transparent" />
    </div>
  );
}
