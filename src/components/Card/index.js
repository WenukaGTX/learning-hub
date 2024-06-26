import './card.scss';

function Card(props) {
  return (
    <div className={`card ${props.type ? props.type : 'basic'} ${props.classes ? props.classes : ''}`}>
      <img className='card-image' src={props.image} alt="logo 1" height={props.cardImageSize ?? props.cardImageSize} />
      <h4 className='card-header'>{props.title}</h4>
      <p className='card-description'>{props.description}</p>
    </div>
  );
}

export default Card;
