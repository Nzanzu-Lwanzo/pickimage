import React, { createContext, useContext, useState } from "react";
import type { StudioSectionType } from "../@types";

interface StudioContextType {
  section: StudioSectionType;
  setSection: React.Dispatch<React.SetStateAction<StudioSectionType>>;
}

const StudioContext = createContext<StudioContextType | null>(null);

export const useStudioContext = () => {
  return useContext(StudioContext);
};

export const StudioContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<StudioSectionType>("uploader");

  const value = {
    section,
    setSection,
  };

  return (
    <StudioContext.Provider value={value}>{children}</StudioContext.Provider>
  );
};
