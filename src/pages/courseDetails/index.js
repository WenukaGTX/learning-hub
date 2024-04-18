import './courseDetails.scss';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';

function CourseDetails() {
  const [loading, setLoading] = useState(true);
  const [product, setproduct] = useState([]);
  const [suites, setSuites] = useState([]);
  const [companyLogos, setCompanyLogos] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [highScorers, setHighScorers] = useState([]);

  useEffect(() => {
    const url = "https://661783abed6b8fa43482d698.mockapi.io/intuit/training/reactjs/products/1";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setproduct(json);
        setSuites(json.suites);
        setCompanyLogos(json.partnerCompanies);
        setBenefits(json.benefits);
        setHighScorers(json.highScorers)
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (!loading) {
    return (
      <div>
        <div className="banner banner-secondary">
          <div className="container">
            <img className="mb-1" src="https://placehold.co/100" alt="course logo" />
            <h1>{product.title}</h1>
            <div className="info-row">
              <p>Duration {product.duration} hours</p>
              <p className="spacer">|</p>
              <p>Last updated {product.lastUpdated}</p>
            </div>
            <div className="info-row">
              <p>Rating {product.rating}</p>
              <p className="spacer">|</p>
              <p>{product.noOfEnrollments} enrollments</p>
            </div>
            <p className='mb-3'>{product.description}</p>
            <Button type="primary" buttonText="Enroll for free" />
          </div>
        </div>
        <div className='pt-4'>
          <div className="container">
            <h3>Course contents</h3>
            {suites.map((suit) => (
              <ListItem
                key={suit.id}
                listIcon={suit.icon}
                listHeader={suit.title}
                listDescription={`${suit.displayDuration} | ${suit.cpePoints} CPE credits`}
              />
            ))}
          </div>
        </div>
        <div className='pt-4'>
          <div className="container">
            <h3 className='mb-3'>Learners work at</h3>
            <div className='logo-block'>
              {companyLogos.map((logo) => (
                <img key={logo.id} src={logo.logo} alt={`logo ${logo.id}`} />
              ))}
            </div>
          </div>
        </div>
        <div className='pt-4'>
          <div className="container">
            <h3 className='text-center mb-3'>Benefits of the career path</h3>
            <div className='row'>
              {benefits.map((item) => (
                <div className='col-4' key={item.id}>
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-4'>
          <div className="container">
            <h3 className='text-center mb-3'>High scorers</h3>
            <div className='row'>
              {highScorers.map((item) => (
                <div className='col-4' key={item.id}>
                  <Card
                    type="round"
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (<div className="container text-center pt-4">Loading...</div>)
  }
}

export default CourseDetails;
