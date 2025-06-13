import style from "./style.module.css";
import StudioMainMenu from "./menu";
import PickerSection from "./picker";
import type { StudioSectionType } from "../lib/@types";
import type React from "react";
import { useStudioContext } from "../lib/contexts/studio";
import SpinLoader from "./__global__/loader";

const Sections: Record<StudioSectionType, React.ReactElement> = {
  picker: <PickerSection />,
  uploader: <SpinLoader />,
};

const Studio = () => {
  const ctx = useStudioContext();

  return (
    <main className={style.studio}>
      <StudioMainMenu />
      <div className={style.studio__content}>
        {ctx?.section && Sections[ctx?.section]}
      </div>
    </main>
  );
};

export default Studio;
