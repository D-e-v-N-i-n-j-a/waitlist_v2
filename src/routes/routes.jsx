// protectedRoutes.js
import Landing from "../pages/Landing";
import About from "../pages/About";
import { Contact } from "../pages/Contact";
const routes = [
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/about',
    element: <About/>
  },

  {
    path: '/contact',
    element: <Contact/>
  },
];

export default routes;
