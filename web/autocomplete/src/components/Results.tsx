type ResultsProps = {
  results: string[]
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div className="piece">
      <div id="results">
        {results.map((result) => {
          return (<div>{result}</div>)
        })}
      </div>
    </div>
  );
}

export default Results;
