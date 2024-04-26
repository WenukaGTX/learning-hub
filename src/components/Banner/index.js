import './banner.scss';
import Button from '../Button';

function Banner() {
  const handleClickScrolltoProjects = () => {
    const element = document.getElementById('productListHome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner banner-dark">
      <div className='container flex justify-space-between'>
        <div className='banner-left'>
          <h1>Get certified with QuickBooks for free</h1>
          <h3 className='mb-4'>Gain skills plus a professional certificate</h3>
          <Button type="primary" buttonText="View certifications" onClick={handleClickScrolltoProjects}></Button>
        </div>
        <div className='banner-right'>
          <img src='https://placehold.co/250' alt='banner' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
