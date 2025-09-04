import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import SplashScreen from "../components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shapat & Basha",
  description: "Join us for our wedding celebration on October 27, 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  // The FIX is here: Changed React.Node to React.ReactNode
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}