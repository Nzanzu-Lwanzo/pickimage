import type { ImageType } from "../../../../../lib/@types";
import _style from "./style.module.css";
import TrashIcon from "../../../../../assets/icons/trash";
import CloudArrowDown from "../../../../../assets/icons/cloudArrowDown";
import Checkbox from "../../../../__global__/checkbox";
import ArrowsOut from "../../../../../assets/icons/arrowsOut";
import Tag from "../../../../__global__/tag";
import type { CSSProperties } from "react";
import { usePickerContext } from "../../../../../lib/contexts/picker";

const ImageCard = ({
  image,
  style,
}: {
  image: ImageType;
  style?: CSSProperties;
}) => {
  const ctx = usePickerContext();

  return (
    <>
      <img key={image.id} src={image.url} style={style} />
      <div className={_style.image__legend}>
        <Tag text="Public" />
        <div className={_style.actions}>
          <button className={`${_style.delete} ${_style.action__button}`}>
            <TrashIcon dimension={15} />
          </button>
          <button className={_style.action__button}>
            <CloudArrowDown dimension={15} />
          </button>
          <button
            className={_style.action__button}
            onClick={() => ctx?.setCurrentImage(image)}
          >
            <ArrowsOut dimension={15} />
          </button>
          <Checkbox />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
