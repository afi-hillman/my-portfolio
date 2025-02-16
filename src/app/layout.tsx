import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afi Hillman - Portfolio",
  description: "software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-xl mx-auto px-4 md:px-8`}
      >
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// border-dashed border-x-2 border-ring
