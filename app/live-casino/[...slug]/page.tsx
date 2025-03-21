"use client";

import ListGame from "@/components/ListGame";
import React from "react";
import { useGetLiveCasinoInfo } from "@/context/LiveCasinoContext";

const GamePage = () => {
  const data = useGetLiveCasinoInfo();
  return (
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
  );
};

export default GamePage;
