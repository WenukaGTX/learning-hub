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
                  <p>QuickBooks Online Accountant is a cloud-based accounting software for accountants that allows accounting professionals to access multiple clients from one login in real-time.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  {/* <Button type="secondary" buttonText="Read more"></Button> */}
                </div>
                
                <div className='cols features'>
                  <h4>Feature Title 01 sample</h4>
                  <p>Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Button type="secondary" buttonText="Read more"></Button>
                  </div>
                
                <div className='cols features'>
                  <h4>Feature Title 02 sample</h4>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
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
  