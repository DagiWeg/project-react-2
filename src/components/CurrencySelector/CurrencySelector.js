import "./CurrencySelector.css";

function CurrencySelector({ currency, setCurrency }) {
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <select name="currency" value={currency} onChange={handleCurrencyChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
