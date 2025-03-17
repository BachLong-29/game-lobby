"use client";

import "@/styles/layout.scss";

import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image alt="logo" src="/logo.svg" width={60} height={30} />
      </Link>
    </nav>
  );
};

export default Navigation;
