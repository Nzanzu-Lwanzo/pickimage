import style from "./style.module.css";

const SpinLoader = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}></div>
    </div>
  );
};

export default SpinLoader;
