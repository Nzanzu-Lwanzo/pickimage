import style from "./style.module.css";
import ImagesGrid from "./structures/grid";

const PickerSection = () => {
  return (
    <div className={style.picker__section}>
      <ImagesGrid />
    </div>
  );
};

export default PickerSection;
