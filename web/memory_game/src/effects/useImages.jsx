import { useEffect, useState } from "react";

const useImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchDogs() {
      const result = await fetch('https://dog.ceo/api/breed/newfoundland/images/random/8');
      const { message } = await result.json();
      if (!ignore) {
        setImages(message);
      }
    }

    fetchDogs();

    return () => {
      ignore = true;
    }
  }, []);

  return images;
}

export default useImages;
