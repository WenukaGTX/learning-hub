import './loader.scss';

function Loader(props) {
  return (
    <span className="loader" style={{ width: props.size, height: props.size, borderWidth: props.thickness }}></span>
  );
}

export default Loader;
