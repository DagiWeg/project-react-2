import "./Button.css";

function Button(props) {
  const { label, onClick } = props;

  return (
    <button type="submit" className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
