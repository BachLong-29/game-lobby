"use client";

import "@/styles/layout.scss";

import { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";

interface GameCategory {
  id: number;
  name: string;
}

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState<GameCategory[]>([
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "RPG" },
    { id: 4, name: "Strategy" },
    { id: 5, name: "Sports" },
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "http://casino.api.kasino.nl/v1/kansino/en/config"
      );
      console.log(response);
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <ul className={active ? "nav-links active" : "nav-links"}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href="#">{category.name}</Link>
          </li>
        ))}
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
