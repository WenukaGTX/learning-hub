import './banner.scss';
import Button from '../Button';

function Banner() {
  return (
    <div className="banner">
      <div className='hero-banner'>
        
        <div className='wrapper'>
          <div className='banner-content'>
            <div className='banner-copy'>
              <h1>Get Certified with QuickBooks for FREE</h1>
              <h2>Gain skills plus a professional certificate.</h2>
              <Button type="primary banner" buttonText="View certifications"></Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
