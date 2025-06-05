import style from "./style.module.css";
import ImagesIcon from "../../assets/icons/images";
import CloudArrowUp from "../../assets/icons/cloudArrowUp";
import HouseLineIcon from "../../assets/icons/houseLine";
import Gear from "../../assets/icons/gear";

const StudioMainMenu = () => {
  return (
    <div className={style.studio__main__menu}>
      <div className={style.navigation__buttons}>
        <button type="button" className={style.navigation__button}>
          <ImagesIcon dimension={25} />
        </button>

        <button type="button" className={style.navigation__button}>
          <CloudArrowUp dimension={25} />
        </button>
      </div>
      <div className={style.metas}>
        <button className={style.extra__button}>
          <HouseLineIcon />
        </button>
        <button className={style.extra__button}>
          <Gear />
        </button>
      </div>
    </div>
  );
};

export default StudioMainMenu;
