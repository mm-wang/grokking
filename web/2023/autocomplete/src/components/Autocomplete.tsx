import { useState, useEffect } from "react";
import Results from "./Results";
import { fruits } from "../resources/fruits";

const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const useDebounceValue = (value: string, wait: number): string => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceValue(value);
      }, wait);

      return () => clearTimeout(timeout);
    }, [value, wait])

    return debounceValue;
  }

  const getResultsForInput = (input: string, signal: AbortSignal): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      // Adding abort signal
      if (signal?.aborted) {
        reject(signal.reason);
      }
      setTimeout(() => {
        const current = fruits.filter((fruit) => fruit.toLowerCase().includes(input.toLowerCase()));
        resolve(current);
      }, Math.random() * 1000);
    })
  }

  const debounceInput = useDebounceValue(input, 250);

  useEffect(() => {
    // Adding abort signal
    const controller = new AbortController();
    const signal = controller.signal;
    async function populateResults() {
      setResults([]);
      if (!debounceInput) {
        return;
      }
      // const data = await getResultsForInput(input);
      const data = await getResultsForInput(debounceInput, signal);
      setResults(data);
    }
    populateResults();

    return () => controller.abort("Cancel request");
  },[debounceInput])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setInput(val);
  }

  return (
    <div className="container">
      <div className="piece">
        <span>Autocomplete input here</span>
      </div>
      <div className="piece">
        <input id="input" value={input} onChange={handleChange} type="text"/>
      </div>
      <Results results={results} />
    </div>
  )
}

export default Autocomplete;
