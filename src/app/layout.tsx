import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} antialiased max-w-screen-xl mx-auto px-4 md:px-8`}
      >
        <ThemeProvider>
          <NavMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
