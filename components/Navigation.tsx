"use client";

import "@/styles/layout.scss";

import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import MenuGame from "./MenuGame";
import { useGetInitInfo } from "@/context/HomeContext";
import { useState } from "react";

const Navigation = () => {
  const { menu } = useGetInitInfo();
  const gameLobby = menu.lobby.items;
  const gameLiveLobby = menu.liveLobby.items;
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/">
        <Image alt="logo" src="/logo.svg" width={60} height={30} />
      </Link>
      <Menu className="menu-toggle" onClick={() => setIsActive(true)} />
      <div className={`menu-overlay ${isActive ? "active" : ""}`}>
        <X className="menu-close" onClick={() => setIsActive(false)} />
        <h1>Lobby</h1>
        <div className="menu-game-grid">
          {gameLobby.map((item) => (
            <Link href={item.path} key={item.id} className="game-card">
              <Image
                src={
                  item.image?.original?.src ||
                  item.animatedSvg.desktop?.original?.src ||
                  "/default-img.svg"
                }
                alt={item.image.alt}
                width={100}
                height={100}
                className="game-img"
              />
              <div className="overlay">
                <div className="game-text">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <h1>Live Lobby</h1>
        <div className="menu-game-grid">
          {gameLiveLobby.map((item) => (
            <Link href={item.path} key={item.id} className="game-card">
              <Image
                src={
                  item.image?.original?.src ||
                  item.animatedSvg.desktop?.original?.src ||
                  "/default-img.svg"
                }
                alt={item.image.alt}
                width={100}
                height={100}
                className="game-img"
              />
              <div className="overlay">
                <div className="game-text">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MenuGame data={gameLobby} />
      <MenuGame data={gameLiveLobby} />
    </nav>
  );
};

export default Navigation;
