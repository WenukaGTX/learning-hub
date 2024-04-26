import './banner.scss';
import Button from '../Button';

function Banner() {
  return (
    <div className="banner banner-dark">
      <div className='container flex justify-space-between'>
        <div className='banner-left'>
          <h1>Get certified with QuickBooks for free</h1>
          <h3 className='mb-4'>Gain skills plus a professional certificate</h3>
          <Button type="button button-primary" buttonText="View certifications"></Button>
        </div>
        <div className='banner-right'>
          <img src='https://placehold.co/250' alt='banner' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
