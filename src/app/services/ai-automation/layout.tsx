import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services — Intelligent Agents & Workflows | Create Workflow",
  description:
    "We build AI agents, intelligent document processing, and autonomous workflows that run your operations 24/7 — so you can focus on growth, not grunt work.",
};

export default function AIAutomationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
