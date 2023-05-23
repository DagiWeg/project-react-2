import "./ConvertedResult.css";

function ConvertedResult(props) {
  const { exchangeRate, toCurrency } = props;

  return (
    <div>
      <p className="result">
        {exchangeRate} {toCurrency}
      </p>
    </div>
  );
}

export default ConvertedResult;
