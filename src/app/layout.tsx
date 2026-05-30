import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JARVINx — Local AI Agent for Your Homelab",
  description:
    "JARVINx monitors your system, reasons with a local LLM, and acts — privately, without cloud dependency.",
  keywords: ["homelab", "AI agent", "local LLM", "Ollama", "self-hosted", "Go"],
  openGraph: {
    title: "JARVINx — Local AI Agent for Your Homelab",
    description:
      "JARVINx monitors your system, reasons with a local LLM, and acts — privately, without cloud dependency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}