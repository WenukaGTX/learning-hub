import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../utilities/auth";
import { useAuth } from "../../utilities/AuthContext";
import 'firebase/auth'
import './login.scss';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [waiting, setWaiting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate first name
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm() && !waiting) {
      setWaiting(true);
      await doSignInWithEmailAndPassword(email, password);
      login();
      setWaiting(false);
      redirectToHomePage();
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    if (waiting) {
      setWaiting(true);
      await doSignInWithGoogle().catch(err => {
        setWaiting(false);
      });
    }
  };

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="bg-ash pt-4 pb-4 mt-8">
      <div className="signup-form">
        <div className="container">
          <h4 className="text-center">Login</h4>
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label className="input-label" htmlFor="email">Email</label>
              <input
                className={`input-field ${errors.email ? 'error' : ''}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
                name="email"
              />
              {errors.email && <div className="input-error">{errors.email}</div>}
            </div>

            <div className="mb-2">
              <label className="input-label" htmlFor="password">Password</label>
              <input
                className={`input-field ${errors.password ? 'error' : ''}`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id="password"
                name="password"
              />
              {errors.password && <div className="input-error">{errors.password}</div>}
            </div>
            <Button className="width-100" type="primary" buttonText="Login" loading={waiting} />
          </form>
          {/* <Button className="width-100 mt-2" buttonText="Google" loading={waiting} onClick={handleGoogleSignIn} /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
