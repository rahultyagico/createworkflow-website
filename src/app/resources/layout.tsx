import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEO Frequency — Curated Tools & Guides for Founders | Create Workflow",
  description:
    "Handpicked tools, tech stacks, and resources we recommend to every founder we work with. Battle-tested and founder-approved.",
};

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
