import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/types/Layout";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Css",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
