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
          <div className={style.meta__on__image__container}>
            <PickerMetaContextProvider>
              <MetaOnImage />
            </PickerMetaContextProvider>
          </div>
          <ImagesGrid />
        </div>
      </div>
    </PickerContextProvider>
  );
};

export default PickerSection;
