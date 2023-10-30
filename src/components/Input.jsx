export default function Input({ label, inputType='number', value=0, onInputValueChange, min=0, max=Infinity }) {
  return (
    <p>
      <label>
        {label}
        <input 
          type={inputType} 
          min={min}
          max={max}
          value={value} 
          onChange={(e) => onInputValueChange(label, e.target.value)}
        />
      </label>
    </p> 
  )
}