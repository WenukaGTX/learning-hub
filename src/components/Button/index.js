import './button.scss';

function Button(props) {
  return (
    <button
      className={`button button-${props.type} ${props.className}`}
      onClick={props.onClick}
    >{props.buttonText}</button>
  );
}

export default Button;
