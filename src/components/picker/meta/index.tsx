import style from "./style.module.css";
import InfoIcon from "../../../assets/icons/info";
import TagIcon from "../../../assets/icons/tag";
import PencilSimpleLine from "../../../assets/icons/pencilSimpleLine";
// import ImageInfos from "./infos";
import ImageRefs from "./references";

const MetaOnImage = () => {
  return (
    <div className={style.meta__on__image}>
      <div className={style.preview__image}>
        Select an image to preview and update
      </div>
      <div className={style.distributive__menu}>
        <div className={style.topbar}>
          <button className={style.menu__button}>
            <span>Update</span>
            <span className="center">
              <PencilSimpleLine />
            </span>
          </button>
          <button className={style.menu__button}>
            <span>References</span>
            <span className="center">
              <TagIcon />
            </span>
          </button>
          <button className={`${style.active} ${style.menu__button}`}>
            <span>Meta</span>
            <span className="center">
              <InfoIcon />
            </span>
          </button>
        </div>
        <div className={style.section__wrapper}>
          {/* <ImageInfos /> */}
          <ImageRefs />
        </div>
      </div>
    </div>
  );
};

export default MetaOnImage;
