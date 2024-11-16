import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Sidebar from "./assets/shared/Sidebar";


import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
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
