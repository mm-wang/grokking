import { useState } from 'react';

const Tile = ({src, tileId, handleClick, flipped}) => {
  // const [showTile, setShowTile] = useState(flipped);

  // const handleClick = () => {
  //   setShowTile(!showTile);
  // }

  return (
    <div className="" key={tileId} onClick={(e) => handleClick(tileId)}>
      {
        // showTile ? 
        flipped ?
          <img className="tile img-tile" src={src} /> :
          <div className="tile empty"></div>
      }
      
    </div>
  )
}

export default Tile;
