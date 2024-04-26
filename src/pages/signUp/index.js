import { useState } from "react";
import Button from '../../components/Button';
import './signUp.scss';

function SignUp() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate first name
    if (!formData.fName.trim()) {
      newErrors.fName = 'First name is required';
      valid = false;
    }

    // Validate last name
    if (!formData.lName.trim()) {
      newErrors.lName = 'Last name is required';
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://66260355052332d55321482e.mockapi.io/intuit/trainings/reactjs/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        setSuccessMessage('Form submitted successfully');
        setFormData({ fName: '', lName: '', email: '' });
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    }
  };

  return (
    <div className="bg-ash pt-4 pb-4">
      <div className="signup-form">
        <div className="container">
          <h4 className="text-center">Sign up</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="input-label" htmlFor="fName">First Name:</label>
              <input
                className={`input-field ${errors.fName ? 'error' : ''}`}
                type="text"
                id="fName"
                name="fName"
                value={formData.fName}
                onChange={handleInputChange}
              />
              {errors.fName && <div className="input-error">{errors.fName}</div>}
            </div>

            <div className="mb-2">
              <label className="input-label" htmlFor="lName">Last Name:</label>
              <input
                className={`input-field ${errors.lName ? 'error' : ''}`}
                type="text"
                id="lName"
                name="lName"
                value={formData.lName}
                onChange={handleInputChange}
              />
              {errors.lName && <div className="input-error">{errors.lName}</div>}
            </div>

            <div className="mb-2">
              <label className="input-label" htmlFor="name">Email:</label>
              <input
                className={`input-field ${errors.email ? 'error' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="input-error">{errors.email}</div>}
            </div>

            <Button className="width-100" type="primary" buttonText="Submit" />
          </form>
          {successMessage && <h5 className="text-center mt-3 mb-0">{successMessage}</h5>}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
