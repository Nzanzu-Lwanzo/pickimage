import style from "./style.module.css";

const data = [
  { label: "Author", value: "John Doe" },
  {
    label: "Bio",
    value:
      "Software engineer with 10+ years of experience in web development, specializing in React and Node.js. Loves writing clean, maintainable code.",
  },
  { label: "Email", value: "john.doe@example.com" },
  { label: "Alt", value: "Some very awesome image you will like to use" },
  {
    label: "Caption",
    value: "So, see this image ? It has got no actual description",
  },
  {
    label: "uploaedAt",
    value: "2 years ago",
  },
  {
    label: "credit",
    value: "getty image / Nzanzu Lwanzo",
  },
];

const ImageInfos = () => {
  return (
    <table className={style.table}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={style.row}>
            <td className={style.label}>{item.label}</td>
            <td className={style.value}>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ImageInfos;
