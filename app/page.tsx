"use client";

import "@/styles/home.scss";

import Image from "next/image";
import Link from "next/link";
import SectionGame from "@/components/SectionGame";
import { useGetInitInfo } from "@/context/HomeContext";

export default function Home() {
  const { gamesOfTheMonth, menu } = useGetInitInfo();
  const gameLobby = menu.lobby.items;
  const gameLiveLobby = menu.liveLobby.items;
  return (
    <div className="container">
      <SectionGame
        data={gamesOfTheMonth}
        title="Game of the month"
        renderItem={(item) => (
          <div key={item.id} className="game-card">
            <Image
              src={item.image.original.src}
              alt={item.image.alt}
              width={200}
              height={200}
              className="game-img"
            />
            <div className="overlay">
              <div className="game-text">{item.gameText}</div>
            </div>
          </div>
        )}
      />

      <SectionGame
        data={gameLobby}
        title="Lobby"
        renderItem={(item) => (
          <Link href={item.path} key={item.id} className="game-card">
            <Image
              src={
                item.image?.original?.src ||
                item.animatedSvg.desktop?.original?.src ||
                "/default-img.svg"
              }
              alt={item.image.alt}
              width={200}
              height={200}
              className="game-img"
            />
            <div className="overlay">
              <div className="game-text">{item.name}</div>
            </div>
          </Link>
        )}
      />

      <SectionGame
        data={gameLiveLobby}
        title="Live Lobby"
        renderItem={(item) => (
          <Link href={item.path} key={item.id} className="game-card">
            <Image
              src={
                item.image?.original?.src ||
                item.animatedSvg.desktop?.original?.src ||
                "/default-img.svg"
              }
              alt={item.image.alt}
              width={200}
              height={200}
              className="game-img"
            />
            <div className="overlay">
              <div className="game-text">{item.name}</div>
            </div>
          </Link>
        )}
      />
    </div>
  );
}
