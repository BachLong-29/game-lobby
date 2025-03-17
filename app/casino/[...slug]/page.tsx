"use client";

import ListGame from "@/components/ListGame";
import React from "react";
import { useGetCasinoInfo } from "@/context/CasinoContext";

const GamePage = () => {
  const data = useGetCasinoInfo();
  return (
    <div>
      <ListGame
        data={
          data.components
            ?.find((comp) => comp.type === "game-list")
            ?.games.map((game) => ({
              id: game.id,
              name: game.gameText,
            })) ?? []
        }
      />
    </div>
  );
};

export default GamePage;
