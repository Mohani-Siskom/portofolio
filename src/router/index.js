import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Experience from '../pages/experience';
import Education from '../pages/education';
import Skills from '../pages/skills';
import Intersts from '../pages/interests';
import Awards from '../pages/awards';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
{
    path: '/about',
    element: <About />
},
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/interests",
    element: <Intersts />,
  },
{
    path: '/awards',
    element: <Awards />
}
]);
