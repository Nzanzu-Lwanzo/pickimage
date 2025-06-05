import style from "./style.module.css"
import StudioMainMenu from "./menu"

const Studio = () => {
  return (
    <main className={style.studio}>
      <StudioMainMenu />
      <div className={style.studio__content}></div>
    </main>
  )
}

export default Studio