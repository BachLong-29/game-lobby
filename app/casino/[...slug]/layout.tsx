import "@/styles/global.scss";

import { CasinoProvider } from "@/context/CasinoContext";
import type { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Game",
  description: "Game lobby",
};

export default async function CasinoLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}>) {
  const resolvedParams = await params;
  const res = await axios.get(
    `https://casino.api.stg.kansino.nl/v1/kansino/pages/nl/casino/${resolvedParams.slug.join(
      "/"
    )}`
  );
  return <CasinoProvider value={res.data}>{children}</CasinoProvider>;
}
