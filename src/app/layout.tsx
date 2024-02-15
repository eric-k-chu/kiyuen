import type { Metadata } from "next";
import { Nova_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
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
      <body className={`${roboto.variable} ${nova.variable}`}>
        <main className="font-roboto relative min-h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
