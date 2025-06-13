import style from "./style.module.css";
import type React from "react";
import type { PickerMetaTabType } from "../../../lib/@types";
import { useCallback } from "react";
import { usePickerMetaContext } from "../../../lib/contexts/pickerMeta";
import UpdateImageMetadataForm from "../../__global__/imageForm";
import MetaTabsTopbar from "./topbar";
import ImageRefs from "./references";
import ImageInfos from "./infos";
import { usePickerContext } from "../../../lib/contexts/picker";
import ArrowCircleLeft from "../../../assets/icons/arrowCircleLeft";

const Tabs: Record<PickerMetaTabType, React.ReactElement> = {
  metadata: <ImageInfos />,
  references: <ImageRefs />,
  update: <UpdateImageMetadataForm />,
};

const MetaOnImage = () => {
  const pickerMetaCtx = usePickerMetaContext();
  const getTab = useCallback(
    (tab: PickerMetaTabType) => Tabs[tab],
    [pickerMetaCtx?.pickerMetaTab]
  );

  const pickerCtx = usePickerContext();

  return (
    <div
      className={`${style.meta__on__image__container} ${
        pickerCtx?.currentImage && style.active
      } `}
    >
      <div className={style.meta__on__image}>
        <div className={style.topbar}>
          <button
            type="button"
            className={style.topbar__button}
            onClick={() => pickerCtx?.setCurrentImage(null)}
          >
            <ArrowCircleLeft dimension={25} />
          </button>
        </div>
        <div className={style.preview__image}>
          {pickerCtx?.currentImage ? (
            <>
              <img src={pickerCtx.currentImage.url} alt="" />
            </>
          ) : (
            "Select an image to preview and update"
          )}
        </div>
        <div className={style.distributive__menu}>
          <MetaTabsTopbar />
          <div className={style.section__wrapper}>
            {getTab(pickerMetaCtx?.pickerMetaTab!)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaOnImage;
