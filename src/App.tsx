import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Sidebar from "./assets/shared/Sidebar";


import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
// import Navbar from "./layouts/NavBar";
// import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Sidebar />,
    children : [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/portfolio/:project_name',
        element: <ProjectDetails />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
