// import './home.scss';
import React, { useState } from 'react';
import './subscription.scss';
import Button from '../../components/Button';

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
        setFormData({ email: '' });
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
    <section className='section-padding bt-ash bg-mint'>
      <div className='container'>
        <h2 className='mb-2 text-center'>Get the latest news and upadates</h2>
        <h5 className='mt-3 text-center'>Subscribe our newsletter to recieave the latest news and upadates about QuickBooks certifications</h5>
        
          <form onSubmit={handleSubmit} className='subscribe-form'>
          <div className='email-input width-100'>
            <input className={`input-field ${errors.email ? 'error' : ''}`}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email address'
            />
            <span className="input-error">{errors.email}</span>
          </div>
          <Button type="secondary" buttonText="Subscribe now" />
        </form>
        
        {successMessage && <h4 className='mt-3 mb-0 pt-2 pb-2 bt-ash br-ash bb-ash bl-ash text-center'>{successMessage}</h4>}
        
      </div>
    </section>
  );
}

export default Subscription;
