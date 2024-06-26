import './listItem.scss';

function ListItem(props) {
  return (
    <div className={`list-item ${props.listClasses}`}>
      <img
        className='list-icon'
        src={props.listIcon}
        alt='list icon'
        height={props.size ? props.size : 50}
        width={props.size ? props.size : 50}
      />
      <div className='list-content'>
        <h4 className='list-header'>{props.listHeader}</h4>
        <p className='list-description'>{props.listDescription}</p>
      </div>
    </div>
  );
}

export default ListItem;
