import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import ListItem from '../../components/ListItem';
import './courseDetails.scss';

function CourseDetails() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [product, setproduct] = useState([]);
  const [suites, setSuites] = useState([]);
  const [companyLogos, setCompanyLogos] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [highScorers, setHighScorers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const url = `https://661783abed6b8fa43482d698.mockapi.io/intuit/training/reactjs/products/${id}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product not found!');
        }
        return response.json();
      })
      .then(data => {
        setproduct(data);
        setSuites(data.suites);
        setCompanyLogos(data.partnerCompanies);
        setBenefits(data.benefits);
        setHighScorers(data.highScorers)
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(error);
      });
  }, [id]);

  if (!loading && !errorMessage) {
    return (
      <div>
        <div className="banner banner-dark">
          <div className="container">
            <img className="mb-1" src="https://placehold.co/100" alt="course logo" />
            <h1>{product.title}</h1>
            <div className="info-row">
              <p>Duration: {product.duration}</p>
              <p className="spacer">|</p>
              <p>Last updated {product.lastUpdated}</p>
            </div>
            <div className="info-row">
              <p>Rating {product.rating}</p>
              <p className="spacer">|</p>
              <p>{product.noOfEnrollments} enrollments</p>
            </div>
            <p className='mb-3'>{product.description}</p>
            <Link to='/sign-up' className='button button-primary'>Enroll for free</Link>
          </div>
        </div>
        <section className='section-padding bt-ash'>
          <div className="container">
            <h3 className='mb-3'>Course contents</h3>
            {suites.map((suit) => (
              <ListItem
                key={suit.id}
                listIcon={suit.icon}
                listHeader={suit.title}
                listDescription={`${suit.displayDuration} | ${suit.cpePoints} CPE credits`}
              />
            ))}
          </div>
        </section>
        <section className='section-padding bt-ash'>
          <div className="container">
            <h3 className='mb-2'>Learners work at</h3>
            <div className='row'>
              {companyLogos.map((logo) => (
                <div className="col-3 mb-2 text-center" key={logo.id}>
                  <img src={logo.logo} alt={`logo ${logo.id}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='section-padding bt-ash'>
          <div className="container">
            <h3 className='text-center mb-3'>Benefits of the career path</h3>
            <div className='row'>
              {benefits.map((item) => (
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
        <section className='section-padding bt-ash'>
          <div className="container">
            <h3 className='text-center mb-3'>High scorers</h3>
            <div className='row'>
              {highScorers.map((item) => (
                <div className='col-4 mb-2-xs' key={item.id}>
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
        </section>
      </div>
    );
  }

  if (loading) {
    return (<div className="container flex align-items-center justify-content-center vh-fit">Loading...</div>)
  }

  if (errorMessage) {
    return (<div className="container flex align-items-center justify-content-center vh-fit">{errorMessage.message}</div>)
  }
}

export default CourseDetails;
