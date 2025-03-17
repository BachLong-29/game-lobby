import "@/styles/global.scss";

import { LiveCasinoProvider } from "@/context/LiveCasinoContext";
import type { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Game",
  description: "Game lobby",
};

export default async function LiveCasinoLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}>) {
  const resolvedParams = await params;
  const res = await axios.get(
    `https://casino.api.stg.kansino.nl/v1/kansino/pages/nl/live-casino/${resolvedParams.slug.join(
      "/"
    )}`
  );
  return <LiveCasinoProvider value={res.data}>{children}</LiveCasinoProvider>;
}
