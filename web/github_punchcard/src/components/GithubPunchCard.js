import { useEffect, useState } from "react";

const GithubPunchCard = () => {
  // Get our commit data
  // Process commit data, 1 big piece - get min/max
  // Place into display of columns - flex direction column
  const [punchColumnData, setPunchColumnData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  
  useEffect(() => {
    const fetchPunchData = async () => {
      console.log("Fetching punch data");
      // await fetch('https://api.github.com/repos/facebook/react/stats/commit_activity')
      await fetch('./PunchCard.json')
        .then(response => response.json())
        .then(data => {
          const [max, columnData] = processPunchData(data);
          setMaxValue(max);
          setPunchColumnData(columnData);    
        });
      // assume data is sorted
    }
    fetchPunchData();
  }, []);
  
  const processPunchData = (data) => {
      let max = 0;
      const columns = data.map((column) => {
          max = Math.max(...column.days, max);
          return column.days;
      });
      return [max, columns];
  }
  
  return (
      <div
          id="github-punch-card"
          style={{
            'display': 'flex', 
            'flexDirection': 'row', 
            margin: '10px',
            padding: '10px',
            width: '10px',
          }}
      >
          {punchColumnData.map((columnTiles, i) =>
            <PunchColumn columnTiles={columnTiles} max={maxValue} key={i}/>
          )}
      </div>
  )
}

const PunchColumn = ({columnTiles, max, key}) => {
  // Present all tiles in the column
  return (
    <div 
        className="punch-column"
        style={{}}
        key={key}
    >
      {columnTiles.map((tile, i) => {
        return <PunchTile value={tile} max={max} point={i} />    
      })}
    </div>
  )
}

const PunchTile = ({ value, max, point }) => {
  // Set color range
  // Pick color based on value/max
  // console.log("Tile: ", value, max);
  return (
    <div 
        className="punch-tile"
        style={{
          'display': 'inline-block',
          'height': '10px',
          'width': '10px',
          'margin': '1px',
          'border': '0.5px solid rgba(0, 0, 0, .1)',
          'backgroundColor': `rgba(10, 255, 10, ${value/max})`
        }}
        key={point}
    >
    </div>
  )
}

export { GithubPunchCard, PunchColumn, PunchTile }
