import type { CSSProperties } from "react";
import _style from "./style.module.css";

const Tag = ({ text, style }: { text: string; style?: CSSProperties }) => {
  return (
    <span className={_style.tag} style={style}>
      {text}
    </span>
  );
};

export default Tag;
