import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Airtable Services — Custom Databases & Automations for Founders | Create Workflow",
  description:
    "Expert Airtable consulting for non-technical founders. Relational databases, custom interfaces, automations, reporting, and migration. From simple setups to enterprise multi-base architectures.",
};

export default function AirtableServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
