import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/Navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" color="black" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-200`} >
        <NextUIProvider>
          <NavBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
