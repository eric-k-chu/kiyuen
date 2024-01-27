import type { Metadata } from "next";
import { Nova_Mono } from "next/font/google";
import "./globals.css";

const nova = Nova_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Eric Chu",
  description: "My Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nova.className}>
        <main className="min-h-screen overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
