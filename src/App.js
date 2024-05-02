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
import FooterSection from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar type='light'/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course-details/:id" element={<CourseDetails />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;