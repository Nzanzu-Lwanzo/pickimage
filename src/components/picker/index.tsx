import style from "./style.module.css";
import ImagesGrid from "./structures/grid";
import MetaOnImage from "./meta";
import PickerMetaContextProvider from "../../lib/contexts/picker";

const PickerSection = () => {
  return (
    <div className={style.picker__section}>
      <div className={style.data__space}>
        <div>
          <PickerMetaContextProvider>
            <MetaOnImage />
          </PickerMetaContextProvider>
        </div>
        <ImagesGrid />
      </div>
    </div>
  );
};

export default PickerSection;
