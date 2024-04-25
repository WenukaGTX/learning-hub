import Card from '../../components/Card';

const successStoryItems = [
  {
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  }
];

function successStories(props) {
  return (
    <div className='pt-4'>
      <div className="container section">
        <h2 className='text-center mb-3'>High scorers</h2>
        <div className='row'>
          {successStoryItems.map((item) => (
            <div className='col-4' key={item.id}>
              <Card
                image={item.image}
                cardImageSize={240}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default successStories;
