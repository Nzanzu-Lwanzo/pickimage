import style from "./style.module.css";

const Checkbox = () => {
  return (
    <div className={style.content}>
      <label className={style.checkBox}>
        <input id="ch1" type="checkbox" />
        <div className={style.transition} />
      </label>
    </div>
  );
};

export default Checkbox;
