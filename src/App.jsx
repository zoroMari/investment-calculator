import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Results from './components/Results';

const INITIAL_INPUTS = [
  { label: 'Initial investment', value: 15000 },
  { label: 'Annual investment', value: 1200 },
  { label: 'Expected return, %', value: 5 },
  { label: 'Duration', value: 10 },
];

function App() {
  const [inputsValues, setInputsValues] = useState(INITIAL_INPUTS);

  function handleChangeValue(label, value) {
    setInputsValues((prev) => {
      const newInputs = [...prev.map((input) => ({...input}))];
      const inputIndexForChange = newInputs.findIndex((input) => input.label.toLowerCase() === label.toLowerCase());
      newInputs[inputIndexForChange].value = +value;
      return newInputs;
    });
  }

  return (
    <main>
      <Header />
      <Inputs inputsValues={inputsValues} onValueChange={handleChangeValue} />
      <Results values={inputsValues} />
    </main>
  )
}

export default App;
