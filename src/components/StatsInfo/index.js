import { Link } from "react-router-dom";
import './statsinfo.scss';

function QuickbooksStats() {
  return (
    <section className='section-padding'>
      <div className='container'>
        <h2 className='mb-3'>What is QuickBooks?</h2>
        <div className='row'>
          <div className='col-3'>
            <p>QuickBooks Online Accountant is a cloud-based accounting software for accountants that allows accounting professionals to access multiple clients from one login in real-time.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <Link className="button">Read more</Link>
          </div>
          <div className='col-3'>
            <div className='feature-card'>
              <h4>Feature title</h4>
              <p>Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Link>Read more</Link>
            </div>
          </div>
          <div className='col-3'>
            <div className='feature-card'>
              <h4>Feature title</h4>
              <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              <Link>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickbooksStats;
