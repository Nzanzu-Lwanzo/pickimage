import type { ImageType } from "../../../lib/@types";
import style from "./style.module.css";
import TrashIcon from "../../../assets/icons/trash";
import CloudArrowDown from "../../../assets/icons/cloudArrowDown";
import Checkbox from "../../__global__/checkbox";
import ArrowsOut from "../../../assets/icons/arrowsOut";
import Tag from "../../__global__/tag";

const ImageCard = ({ image }: { image: ImageType }) => {
  return (
    <div className={style.image__container}>
      <img key={image.id} src={image.url} />
      <div className={style.layer}>
        <Tag text="Public" />
        <div className={style.actions}>
          <button className={`${style.delete} ${style.action__button}`}>
            <TrashIcon />
          </button>
          <button className={style.action__button}>
            <CloudArrowDown />
          </button>
          <button className={style.action__button}>
            <ArrowsOut />
          </button>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
