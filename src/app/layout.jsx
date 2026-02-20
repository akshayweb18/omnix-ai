import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gemini Clone",
  description: "AI Chat Interface built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
       className={`
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans
          bg-[#f7f7f8] dark:bg-neutral-950
          text-gray-900 dark:text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
