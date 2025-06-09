import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import type { ImageType } from "../@types";

interface PickerContext {
  currentImage: ImageType | null;
  setCurrentImage: React.Dispatch<React.SetStateAction<ImageType | null>>;
}

export const PickerContext = createContext<PickerContext | null>(null);

export function usePickerContext() {
  return useContext(PickerContext);
}

export default function PickerContextProvider({
  children,
}: PropsWithChildren<{}>) {
  const [currentImage, setCurrentImage] = useState<ImageType | null>(null);

  const value = { currentImage, setCurrentImage };

  return (
    <PickerContext.Provider value={value}>{children}</PickerContext.Provider>
  );
}
