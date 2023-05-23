import AmountInput from "../AmountInput/AmountInput";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import Button from "../Button/Button";

function Form({ amount, setAmount, currency, setCurrency, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Kwota: </label>
        <AmountInput label="amount" value={amount} onChange={setAmount} />
      </div>
      <div>
        <label htmlFor="currency">Wybierz walutę: </label>
        <CurrencySelector currency={currency} setCurrency={setCurrency} />
      </div>
      <Button type="submit" label="Przelicz na PLN" className="button" />
    </form>
  );
}

export default Form;
