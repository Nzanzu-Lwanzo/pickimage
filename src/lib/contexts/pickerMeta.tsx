import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import type { PickerMetaTabType } from "../@types";

interface PickerMetaContext {
  pickerMetaTab: PickerMetaTabType;
  setPickerMetaTab: React.Dispatch<React.SetStateAction<PickerMetaTabType>>;
}

export const PickerMetaContext = createContext<PickerMetaContext | null>(null);

export function usePickerMetaContext() {
  return useContext(PickerMetaContext);
}

export default function PickerMetaContextProvider({
  children,
}: PropsWithChildren<{}>) {
  const [pickerMetaTab, setPickerMetaTab] =
    useState<PickerMetaTabType>("metadata");

  const value = {
    pickerMetaTab,
    setPickerMetaTab,
  };

  return (
    <PickerMetaContext.Provider value={value}>
      {children}
    </PickerMetaContext.Provider>
  );
}
