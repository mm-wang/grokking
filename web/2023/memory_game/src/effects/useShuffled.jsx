import { useEffect, useState } from 'react'
import useImages from "./useImages";

const useShuffled = () => {
  const seed = useImages();
  const [images, setImages] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      let other = Math.floor(Math.random() * (i));
      [array[i], array[other]] = [array[other], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const grid = seed?.concat(...seed);
    const result = shuffle(grid);
    setImages(result);
  }, [seed]);

  return images;
}

export default useShuffled;
