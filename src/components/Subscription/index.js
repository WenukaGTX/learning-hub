// import './home.scss';
import React, { useState } from 'react';
import './subscription.scss';
import Button from '../../components/Button';
import tick from '../../images/icons/il_life_celebrate_01.png';

function Subscription() {

  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');


  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };


    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      try {
        const response = await fetch('https://662898c654afcabd0736410c.mockapi.io/intuit/training/reactjs/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),

        });


        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        
        setSuccessMessage('Thank you for subscribing!');

        setFormData({email: '' });

        setErrors({});
        
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    }

    
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  

    return (
      <div className='subscription-section'>
        <div className='wrapper'>
          <section className="section type0">
            <div className='content-area'>
              <h2>Get the latest news and upadates about QuickBooks certifications</h2>
              <h4>Lorem Ipsum has been the industry's standard dummy text. When an unknown printer took a galley of type and scrambled it to make a type specimen book. </h4>

              <div className='emailsubs-container'>
                {
                  !successMessage &&
                  <form onSubmit={handleSubmit} className='submit-form'>

                    <div>
                      <input className={`input-field ${errors.email ? 'error' : ''}`}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter your email address'
                      />

                      <span className="input-error">{errors.email}</span>
                      
                    </div>

                    <Button className="subs-btn" type="subs-btn primary" buttonText="Subscribe now" />
                  </form>
                }
               
                {successMessage && <div className='success-message-container'> <img src={tick} alt="Tick" /><h3 className="text-center success-message">{successMessage}</h3></div>}
              </div>
            </div>
            
          </section>

        </div>
      </div>
      
    );
  }
  
  export default Subscription;
  