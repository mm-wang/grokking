import { useState } from 'react';
import useShuffled from '../effects/useShuffled';

import Tile from './Tile';

const MemoryGame = () => {
  // Flip two cards.
  // - If they are a match, increase matches, leave cards unflipped
  // - If they are not a match, reflip cards

  const imagesGrid = useShuffled();

  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [matchCount, setMatchCount] = useState(0);
  const [status, setStatus] = useState({});

  const handleClick = (key) => {
    const flipped = updateCardStatus(key);
    if (flipped.length === 2) {
      const matchCount = checkFlips(key);
      console.log("Current match count: ", matchCount);
    }
  }

  const checkFlips = (key) => {
    if (imagesGrid[cardsFlipped[0]] === imagesGrid[key]) {
      let newMatch = matchCount + 1;
      setCardsChosen([...cardsChosen, cardsFlipped[0], key]);
      setMatchCount(newMatch);
      setCardsFlipped([]);
      return newMatch;
    }
    setTimeout(() => {
      const updateFlippedStatus = {...status, [cardsFlipped[0]]: false, [key]: false };
      setStatus(updateFlippedStatus);
      setCardsFlipped([]);
    }, 1000)  
  }

  const updateCardStatus = (key) => {
    const updatedStatus = {...status, [key]: !status[key]};
    const updatedFlips = [...cardsFlipped, key];
    setStatus(updatedStatus);
    setCardsFlipped(updatedFlips);
    return updatedFlips;
  }

  const showFlippedCard = (key) => {
    return status[key] || cardsChosen.includes(key);
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="rows">
        {imagesGrid.map((tile, i) => {
          return <Tile src={tile} key={i} tileId={i} handleClick={handleClick} flipped={showFlippedCard(i)} />
        })}
      </div>
    </div>
  )
};

export default MemoryGame;
