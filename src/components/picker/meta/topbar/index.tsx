import InfoIcon from "../../../../assets/icons/info";
import TagIcon from "../../../../assets/icons/tag";
import PencilSimpleLine from "../../../../assets/icons/pencilSimpleLine";
import style from "./style.module.css";
import { usePickerMetaContext } from "../../../../lib/contexts/pickerMeta";
import type { PickerMetaTabType } from "../../../../lib/@types";

const MetaTabsTopbar = () => {
  const ctx = usePickerMetaContext();
  const handleSwitchTab = (tab: PickerMetaTabType) =>
    ctx?.setPickerMetaTab(tab);
  const getActive = (tab: PickerMetaTabType | undefined) => {
    return tab === ctx?.pickerMetaTab && style.active;
  };

  return (
    <div className={style.topbar}>
      <button
        className={`${getActive("update")} ${style.menu__button}`}
        onClick={() => handleSwitchTab("update")}
      >
        <span>Update</span>
        <span className="center">
          <PencilSimpleLine />
        </span>
      </button>
      <button
        className={`${getActive("references")} ${style.menu__button}`}
        onClick={() => handleSwitchTab("references")}
      >
        <span>References</span>
        <span className="center">
          <TagIcon />
        </span>
      </button>
      <button
        className={`${getActive("metadata")} ${style.menu__button} `}
        onClick={() => handleSwitchTab("metadata")}
      >
        <span>Meta</span>
        <span className="center">
          <InfoIcon />
        </span>
      </button>
    </div>
  );
};

export default MetaTabsTopbar;
