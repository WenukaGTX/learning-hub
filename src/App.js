import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './App.scss';
import CourseDetails from './pages/CourseDetails';
import SignUp from './pages/SignUp';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course-details",
    element: <CourseDetails />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
