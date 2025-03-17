"use client";

import { createContext, useContext } from "react";

interface CasinoContextType {
  components: { type: string; games: { id: string; gameText: string }[] }[];
}

const CasinoContext = createContext<CasinoContextType>({
  components: [],
});

export const CasinoProvider = ({
  value,
  children,
}: {
  value: CasinoContextType;
  children: React.ReactNode;
}) => {
  return (
    <CasinoContext.Provider value={value}>{children}</CasinoContext.Provider>
  );
};

export const useGetCasinoInfo = () => {
  return useContext(CasinoContext);
};
