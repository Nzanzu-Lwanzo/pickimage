import style from "./style.module.css";
import ImagesGrid from "./structures/grid";
import MetaOnImage from "./meta";

const PickerSection = () => {
  return (
    <div className={style.picker__section}>
      <div className={style.data__space}>
        <MetaOnImage />
        <ImagesGrid />
      </div>
    </div>
  );
};

export default PickerSection;
