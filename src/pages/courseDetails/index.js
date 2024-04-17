import './courseDetails.scss';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Card from '../../components/Card';

function CourseDetails() {
  return (
    <div>
      <div className="banner banner-secondary">
        <div className="container">
          <img className="mb-1" src="https://placehold.co/100" alt="course logo" />
          <h1>QuickBooks Online</h1>
          <div className="info-row">
            <p>Duration 10.5 hours</p>
            <p className="spacer">|</p>
            <p>Duration 10.5 hours</p>
          </div>
          <div className="info-row">
            <p>Rating 4.8</p>
            <p className="spacer">|</p>
            <p>17,513 enrollments</p>
          </div>
          <p className='mb-3'>Learn all the essential processes and functions to help you support clients in QuickBooks Online and manage your work and your team.</p>
          <Button type="primary" buttonText="Enroll for free" />
        </div>
      </div>
      <div className='pt-4'>
        <div className="container">
          <h3>Course contents</h3>
          <ListItem
            listIcon="https://placehold.co/50"
            listHeader="QuickBooks Online solutions"
            listDescription="1 hour 15 mins | 1.5 CPE credits"
          />
          <ListItem
            listIcon="https://placehold.co/50"
            listHeader="QuickBooks Online solutions"
            listDescription="1 hour 15 mins | 1.5 CPE credits"
          />
          <ListItem
            listIcon="https://placehold.co/50"
            listHeader="QuickBooks Online solutions"
            listDescription="1 hour 15 mins | 1.5 CPE credits"
          />
          <ListItem
            listIcon="https://placehold.co/50"
            listHeader="QuickBooks Online solutions"
            listDescription="1 hour 15 mins | 1.5 CPE credits"
          />
        </div>
      </div>
      <div className='pt-4'>
        <div className="container">
          <h3 className='mb-3'>Learners work at</h3>
          <div className='logo-block'>
            <img src="https://placehold.co/200x50" alt="logo 1" />
            <img src="https://placehold.co/200x50" alt="logo 2" />
            <img src="https://placehold.co/200x50" alt="logo 3" />
            <img src="https://placehold.co/200x50" alt="logo 4" />
            <img src="https://placehold.co/200x50" alt="logo 5" />
            <img src="https://placehold.co/200x50" alt="logo 6" />
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <div className="container">
          <h3 className='text-center mb-3'>Benefits of the career path</h3>
          <div className='row'>
            <div className='col-4'>
              <Card
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <div className="container">
          <h3 className='text-center mb-3'>High scorers</h3>
          <div className='row'>
            <div className='col-4'>
              <Card
                type="round"
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                type="round"
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                type="round"
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
            <div className='col-4'>
              <Card
                type="round"
                image="https://placehold.co/120"
                title="Title goes here"
                description="Subtitle goes here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
