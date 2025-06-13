import style from "./style.module.css";
import ArrowCircleUpRight from "../../../assets/icons/arrowCircleUpRight";

const ImageForm = () => {
  return (
    <form className={style.update__form}>
      <div className={style.input__container}>
        <label htmlFor="alt" className={style.label}>
          Alternative text
        </label>
        <input
          type="text"
          name="alt"
          id="alt"
          placeholder="Text to show in case the image doesn't load"
          className={style.input__field}
        />
      </div>
      <div className={style.input__container}>
        <label htmlFor="caption" className={style.label}>
          Caption text
        </label>
        <input
          type="text"
          name="caption"
          id="caption"
          placeholder="Describe the image"
          className={style.input__field}
        />
      </div>
      <div className={style.input__container}>
        <label htmlFor="credit" className={style.label}>
          Credit
        </label>
        <input
          type="text"
          name="credit"
          id="credit"
          placeholder="Who's the author of this image ?"
          className={style.input__field}
        />
      </div>
      <button className={style.submit}>
        <span>Submit</span>
        <span className="center">
          <ArrowCircleUpRight />
        </span>
      </button>
    </form>
  );
};

export default ImageForm;
