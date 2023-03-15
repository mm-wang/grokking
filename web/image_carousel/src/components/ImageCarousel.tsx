import { useEffect, useState } from "react";
import Image from "./Image";

const useDogImages = () => {
  const [dogs, setDogImages] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      const result = await fetch('https://dog.ceo/api/breed/australian/shepherd/images/random/5')
      const {message} = await result.json();
      setDogImages(message);
    }
    fetchDogs();
    }, []);

  return dogs;
}

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const dogs = useDogImages();

  const moveAhead = () => {
    if (index < dogs.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  const moveBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(dogs.length - 1);
    }
    
  }

  return (
    <div id="container">
      <button onClick={moveBack}>Prev</button>
      <div id="image-wrapper">
        <Image src={dogs[index]} />
      </div>
      <button onClick={moveAhead}>Next</button>
    </div>
  )
}

export default ImageCarousel;
