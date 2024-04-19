import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar";
import CourseDetails from "./pages/courseDetails";
import Home from "./pages/home";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div className='learning-hub-container'>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/course-details/:id" element={<CourseDetails />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
