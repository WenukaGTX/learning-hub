// import './home.scss';

import './statsinfo.scss';
import Button from '../Button';

function QuickbooksStats() {
    return (
      <div className='statsinfo-section'>
        <div className='wrapper'>
          <section className="section type0">
            <div className='content-area'>
              <h2>What is QuickBooks?</h2>
              <div className='cols-container'>
                <div className='cols'>
                  <p>QuickBooks Online Accountant is a cloud-based accounting software for accountants that allows accounting professionals to access multiple clients from one login in real-time.<br></br><br></br>QuickBooks uses industry recognized safeguards to securely store important financial data.</p>
                  <Button type="secondary" buttonText="Read more"></Button>
                </div>
                
                <div className='cols'>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br></br><br></br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. </p>
                  <Button type="secondary" buttonText="Read more"></Button>
                  </div>
                
                <div className='cols'>
                  <p>Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <Button type="secondary" buttonText="Read more"></Button>
                  </div>
              </div>
            </div>
            
          </section>

        </div>
      </div>
      
    );
  }
  
  export default QuickbooksStats;
  