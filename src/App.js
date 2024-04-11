import './App.scss';
import CourseDetails from './pages/CourseDetails';
import SignUp from './pages/SignUp';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Home />
      <CourseDetails />
      <SignUp />
    </div>
  );
}

export default App;
