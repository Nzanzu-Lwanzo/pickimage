import { useGetImages } from "../../../../lib/hooks/images";
import ImageCard from "../../image";
import { Masonry } from "react-plock";
import style from "./style.module.css";
import SpinLoader from "../../../__global__/loader";

const ImagesGrid = () => {
  const { images, isFetching } = useGetImages();

  return (
    <>
      {isFetching ? (
        <SpinLoader />
      ) : (
        <>
          <Masonry
            items={images}
            config={{
              columns: [1, 2, 3, 1, 2, 3, 4],
              gap: [16, 16, 16, 16, 16, 16, 16],
              media: [580, 800, 1024, 1180, 1450, 1750, 10_000],
              useBalancedLayout: true,
            }}
            className={style.grid}
            render={(image) => (
              <ImageCard
                key={image.id}
                image={{ id: image.id, url: image.url }}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          />
        </>
      )}
    </>
  );
};

export default ImagesGrid;
