import Card from '../../components/Card';

const successStoryItems = [
  {
    "id": 1,
    "image": "https://randomuser.me/api/portraits/men/79.jpg",
    "title": "Gerome Adrian",
    "description": "Thames & Co"
  },
  {
    "id": 2,
    "image": "https://randomuser.me/api/portraits/men/69.jpg",
    "title": "Karan Singh",
    "description": "IFS India"
  },
  {
    "id": 3,
    "image": "https://randomuser.me/api/portraits/women/0.jpg",
    "title": "Kane D",
    "description": "Delta UK"
  },
  {
    "id": 4,
    "image": "https://randomuser.me/api/portraits/men/61.jpg",
    "title": "Shane W",
    "description": "Corner AU"
  }
];

function successStories(props) {
  return (
    <section className='section-padding bt-ash'>
      <div className='container'>
        <h2 className='mb-4 text-center'>Success Stories</h2>
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
