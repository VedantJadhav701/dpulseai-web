import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DPULSE AI · The Research & Data Engine for Physical AI",
  description: "We turn real-world action into physical understanding for the robots that work beside us. Foundational VLM, VLA, and Robotics Brain development.",
  keywords: ["Physical AI", "Robotics Brain", "VLA", "VLM", "Humyn", "Dpulse AI", "Autonomous Agriculture", "Signal Primitives"],
  openGraph: {
    title: "DPULSE AI · The Research & Data Engine for Physical AI",
    description: "Turning human action into physical understanding for robots. Multi-modal VLA models and autonomous robotics brain.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0e0d0c] text-white selection:bg-[#ed6538] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
