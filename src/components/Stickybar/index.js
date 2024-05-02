import './stickybar.scss';

function Stickybar(props) {
  return (
    <header className={`navbar navbar-${props.type} ${props.className}`}></header>
  );
}

export default Stickybar;
