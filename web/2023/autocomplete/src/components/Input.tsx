import { useState } from 'react';

const Input = () => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className="piece">
      <input id="input" value={input} onChange={handleChange} type="text"/>
    </div>
  );
}

export default Input;
