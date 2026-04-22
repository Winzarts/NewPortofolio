import type { Metadata } from "next";
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

import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Prayoga Majasta - Portfolio",
  description: "Portfolio of Prayoga Majasta Mahendra, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-blue-500/30">
        <NavBar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
          {children}
        </main>
      </body>
    </html>
  );
}
