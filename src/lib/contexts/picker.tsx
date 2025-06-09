import { createContext, useContext, type PropsWithChildren } from "react";

interface PickerContext {}

export const PickerContext = createContext<PickerContext | null>(null);

export function usePickerContext() {
  return useContext(PickerContext);
}

export default function PickerContextProvider({
  children,
}: PropsWithChildren<{}>) {
  const value = {};

  return (
    <PickerContext.Provider value={value}>{children}</PickerContext.Provider>
  );
}
