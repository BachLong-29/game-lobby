import "@/styles/global.scss";

import Footer from "@/components/Footer";
import { HomeProvider } from "@/context/HomeContext";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import axios from "axios";

export const metadata: Metadata = {
  title: "Game Lobby",
  description: "Game Lobby",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const res = await axios.get(
    "https://casino.api.stg.kansino.nl/v1/kansino/nl/config/"
  );
  return (
    <html lang="en">
      <body>
        <HomeProvider
          value={{
            gamesOfTheMonth: res.data.gamesOfTheMonth,
            footerContent: res.data.footerContent,
            menu: res.data.menu,
          }}
        >
          <Navigation />
          <div className="container">
            <main className="main">{children}</main>
            <Footer />
          </div>
        </HomeProvider>
      </body>
    </html>
  );
}
