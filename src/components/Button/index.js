import Loader from '../Loader';
import './button.scss';

function Button(props) {
  return (
    <button
      className={`button button-${props.type} ${props.className}`}
      onClick={props.onClick}
    >
      {props.loading && <Loader size={20} thickness={2} />}
      {props.buttonText}
    </button>
  );
}

export default Button;
