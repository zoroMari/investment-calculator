import Input from './Input';

export default function Inputs({ inputsValues, onValueChange }) {
  return (
    <section id="user-input">
      <div className='input-group'>
        {inputsValues.map((input) => (
          <Input 
            label={input.label}
            value={input.value}
            onInputValueChange={(label, newValue) => onValueChange(label, newValue)} 
            key={input.label}
            min={input.label === 'Duration' ? 1 : 0}
          />
        ))}
      </div>
  </section>
  )
}