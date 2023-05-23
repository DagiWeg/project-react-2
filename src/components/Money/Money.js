import React, { useState } from "react";
import moneyImage from "../../assets/money.png";
import ConvertedResult from "../ConvertedResult/ConvertedResult";
import Form from "../Form/Form";
import "./Money.css";

function Money() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const handleConversion = () => {
    if (isNaN(amount) || amount <= 0) {
      alert("Proszę wprowadzić poprawną, dodatnią kwotę.");
      return;
    }

    const apiUrl = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates?.[0]?.mid;
        if (rate) {
          const convertedResult = amount * rate;
          setResult(convertedResult.toFixed(2));
        }
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Wystąpił błąd podczas przeliczania waluty. Proszę spróbować jeszcze raz."
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleConversion();
  };

  return (
    <div className="container">
      <h1>Money Converter</h1>
      <h2>Przelicznik walut</h2>
      <img src={moneyImage} alt="Money" />
      <Form
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        onSubmit={handleSubmit}
      />
      {result && (
        <ConvertedResult
          exchangeRate={result}
          fromCurrency={currency}
          toCurrency="PLN"
          amount={amount}
        />
      )}
    </div>
  );
}

export default Money;
