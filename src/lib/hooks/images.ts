import { useEffect, useState } from "react";
import type { ImageType } from "../@types";

export function useGetImages() {
  const [isFetching, setIsFetching] = useState(false);

  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    setIsFetching(true);
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_MMIW3e5hSwwOLC6NS5zVjxz7pFF1bQqZ0RQADcIhKnY1BeN4HW2rPKhjrYDlmhVN",
    });

    var requestOptions: RequestInit = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=6",
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        setImages(data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setIsFetching(false));
  }, []);

  return {
    images,
    isFetching,
  };
}
