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
  icons: {
    icon: [
      { url: "/gojo_pfp.ico" },
      { url: "/gojo_pfp.jpg", sizes: "16x16", type: "image/jpg" },
      { url: "/gojo_pfp.jpg", sizes: "32x32", type: "image/jpg" },
    ],
    apple: [{ url: "/gojo_pfp.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <NavMenu />
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
