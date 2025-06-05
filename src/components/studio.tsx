import style from "./style.module.css";
import StudioMainMenu from "./menu";
import PickerSection from "./picker";

const Studio = () => {
  return (
    <main className={style.studio}>
      <StudioMainMenu />
      <div className={style.studio__content}>
        <PickerSection />
      </div>
    </main>
  );
};

export default Studio;
