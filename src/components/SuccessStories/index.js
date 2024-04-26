import Card from '../../components/Card';

const successStoryItems = [
  {
    "id": 1,
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "id": 2,
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "id": 3,
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  },
  {
    "id": 4,
    "image": "https://placehold.co/120",
    "title": "Title goes here",
    "description": "Subtitle goes here"
  }
];

function successStories(props) {
  return (
    <section className='section-padding bt-ash'>
      <div className='container'>
        <h2 className='mb-2 text-center'>Success Stories</h2>
        <div className='row'>
          {successStoryItems.map((item) => (
            <div className='col-4 mb-2-xs' key={item.id}>
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default successStories;
