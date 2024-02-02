import type { Metadata } from "next";
import { Inter, Nova_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nova = Nova_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-nova-mono",
});

export const metadata: Metadata = {
  title: "Eric Chu Portfolio",
  description: "My Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${nova.variable}`}>
        <main className="relative min-h-screen overflow-y-auto font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
