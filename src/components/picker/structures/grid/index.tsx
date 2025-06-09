import style from "./style.module.css";
import { useGetImages } from "../../../../lib/hooks/images";
import ImageCard from "../../image";

const ImagesGrid = () => {
  const { images } = useGetImages();

  return (
    <div className={style.images__grid}>
      {images.map((image) => {
        return <>
          <ImageCard key={image.id} image={image} />
          <ImageCard key={image.id} image={image} />
          <ImageCard key={image.id} image={image} />
          <ImageCard key={image.id} image={image} />
          <ImageCard key={image.id} image={image} />
        </>;
      })}
    </div>
  );
};

export default ImagesGrid;
