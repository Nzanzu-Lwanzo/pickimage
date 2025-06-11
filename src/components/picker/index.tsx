import style from "./style.module.css";
import ImagesGrid from "./structures/grid";
import MetaOnImage from "./meta";
import PickerMetaContextProvider from "../../lib/contexts/pickerMeta";
import PickerContextProvider from "../../lib/contexts/picker";

const PickerSection = () => {
  return (
    <PickerContextProvider>
      <div className={style.picker__section}>
        <div className={style.data__space}>
          <PickerMetaContextProvider>
            <MetaOnImage />
          </PickerMetaContextProvider>
          <ImagesGrid />
        </div>
      </div>
    </PickerContextProvider>
  );
};

export default PickerSection;
