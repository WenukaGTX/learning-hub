import './button.scss';

function Button(props) {
  return (
    <button className={`button button-${props.type} ${props.className}`}>{props.buttonText}</button>
  );
}

export default Button;
