import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PromptProvider } from "@/context/PromptContext";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "AI Prompt Tuner | Fine-Tune LLM Prompts with Temperature, Top-P & Top-K",
  description:
    "Experiment with advanced LLM parameters like temperature, top-p, and top-k to craft effective and controlled AI prompts. Ideal for developers, prompt engineers, and AI enthusiasts.",
  keywords: [
    "AI Prompt Tuner",
    "LLM Prompt Generator",
    "Prompt Engineering Tool",
    "Temperature Top-P Top-K",
    "ChatGPT Prompt Configurator",
    "LLM Fine-tuning Interface",
    "Prompt Optimization Tool",
    "LLM Parameter Playground",
    "AI Prompt Testing",
    "Custom Prompt Builder",
  ],
  openGraph: {
    title:
      "AI Prompt Tuner | Fine-Tune LLM Prompts with Temperature, Top-P & Top-K",
    description:
      "Craft and test prompts with full control over LLM behavior using temperature, top-p, top-k, and memory strategies. Built for developers, researchers, and AI builders.",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LLM Prompt Tuner UI",
      },
    ],
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromptProvider>{children}</PromptProvider>
        <Analytics />
      </body>
    </html>
  );
}
