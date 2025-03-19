"use client";

import "@/styles/home.scss";

import Image from "next/image";
import SectionGame from "@/components/SectionGame";
import { useGetInitInfo } from "@/context/HomeContext";

export default function Home() {
  const { gamesOfTheMonth } = useGetInitInfo();
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
    </div>
  );
}
