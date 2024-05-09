import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../utilities/AuthContext';
import { doCreateUserWithEmailAndPassword } from "../../utilities/auth";
import './signUp.scss';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    pword: ''
  });
  const [errors, setErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState("");
  const [waiting, setWaiting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.pword.trim()) {
      newErrors.pword = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm() && !waiting) {
      setWaiting(true);

      try {
        const user = await doCreateUserWithEmailAndPassword(formData.email, formData.pword);
        login();
        setWaiting(false);
        redirectToHomePage();
      } catch (error) {
        console.log(error.code);
        if (error.code === 'auth/weak-password' || error.code === 'auth/invalid-credential') {
          setSignupErrors("Password should be at least 6 characters");
        } else {
          setSignupErrors(error.message);
        }
        setWaiting(false);
      }
    }
  };

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="bg-ash pt-4 pb-4 mt-8">
      <div className="signup-form">
        <div className="container">
          <h4 className="text-center">Sign up</h4>
          <form onSubmit={handleSubmit}>
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

            <div className="mb-2">
              <label className="input-label" htmlFor="pword">Password:</label>
              <input
                className={`input-field ${errors.pword ? 'error' : ''}`}
                id="pword"
                name="pword"
                value={formData.pword}
                onChange={handleInputChange}
              />
              {errors.pword && <div className="input-error">{errors.pword}</div>}
            </div>

            <Button className="width-100" type="primary" buttonText="Submit" loading={waiting} />
          </form>
          {signupErrors && <div className="input-error text-center">{signupErrors}</div>}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
