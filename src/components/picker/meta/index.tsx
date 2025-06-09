import style from "./style.module.css";
import type React from "react";
import type { PickerMetaTabType } from "../../../lib/@types";
import { useCallback } from "react";
import { usePickerMetaContext } from "../../../lib/contexts/pickerMeta";
import UpdateImageMetadataForm from "../../__global__/update";
import MetaTabsTopbar from "./topbar";
import ImageRefs from "./references";
import ImageInfos from "./infos";

const Tabs: Record<PickerMetaTabType, React.ReactElement> = {
  metadata: <ImageInfos />,
  references: <ImageRefs />,
  update: <UpdateImageMetadataForm />,
};

const MetaOnImage = () => {
  const ctx = usePickerMetaContext();
  const getTab = useCallback(
    (tab: PickerMetaTabType) => Tabs[tab],
    [ctx?.pickerMetaTab]
  );

  return (
    <div className={style.meta__on__image}>
      <div className={style.preview__image}>
        Select an image to preview and update
      </div>
      <div className={style.distributive__menu}>
        <MetaTabsTopbar />
        <div className={style.section__wrapper}>
          {getTab(ctx?.pickerMetaTab!)}
        </div>
      </div>
    </div>
  );
};

export default MetaOnImage;
