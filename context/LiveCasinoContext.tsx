"use client";

import { createContext, useContext } from "react";

interface LiveCasinoContextType {
  components: { type: string; games: { id: string; gameText: string }[] }[];
}

const LiveCasinoContext = createContext<LiveCasinoContextType>({
  components: [],
});

export const LiveCasinoProvider = ({
  value,
  children,
}: {
  value: LiveCasinoContextType;
  children: React.ReactNode;
}) => {
  return (
    <LiveCasinoContext.Provider value={value}>
      {children}
    </LiveCasinoContext.Provider>
  );
};

export const useGetLiveCasinoInfo = () => {
  return useContext(LiveCasinoContext);
};
