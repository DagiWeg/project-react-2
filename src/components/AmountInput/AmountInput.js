import "./AmountInput.css";

const AmountInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    onChange(numericValue);
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />
    </div>
  );
};

export default AmountInput;
