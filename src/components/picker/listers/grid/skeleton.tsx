import style from "./style.module.css"

const GridImageSkeleton = () => {
  return (
    <div className={style.card}>
      <div className={style.image__skeleton}></div>
    </div>
  )
}

export default GridImageSkeleton