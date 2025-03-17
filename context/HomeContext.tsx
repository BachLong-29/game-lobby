"use client";

import { createContext, useContext } from "react";

interface LobbyItem {
  path: string;
  id: string;
  name: string;
  image: { original: { src: string }; alt: string };
  animatedSvg: {
    desktop: {
      original: {
        src: string;
      };
    };
    mobile: {
      original: {
        src: string;
      };
    };
  };
}

interface HomeContextType {
  gamesOfTheMonth: {
    id: string;
    image: { original: { src: string }; alt: string };
    gameText: string;
  }[];
  menu: {
    lobby: {
      items: LobbyItem[];
    };
    liveLobby: { items: LobbyItem[] };
  };
  footerContent: {
    links: { text: string; pagePath: string }[];
    copyright: string;
    logoUrl: string;
    licenseText: string;
    providerLogos: { name: string; imageUrl: string }[];
  };
}

const HomeContext = createContext<HomeContextType>({
  gamesOfTheMonth: [],
  footerContent: {
    links: [],
    copyright: "",
    logoUrl: "",
    licenseText: "",
    providerLogos: [],
  },
  menu: {
    lobby: {
      items: [],
    },
    liveLobby: {
      items: [],
    },
  },
});

export const HomeProvider = ({
  value,
  children,
}: {
  value: HomeContextType;
  children: React.ReactNode;
}) => {
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useGetInitInfo = () => {
  return useContext(HomeContext);
};
