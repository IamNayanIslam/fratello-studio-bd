import { createBrowserRouter } from "react-router-dom";
import Fratello from "../pages/Fratello";
import App from "../App";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
// import Career from "../pages/Team";
import Team from "../pages/Team";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //   errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Fratello />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/",
        element: <Fratello />,
      },
      /*    {
          path: "/applied",
          element: <Applied />,
        },
        {
          path: "/jobpost",
          element: <Postjob />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  
    {
      path: "*",
      element: <Error />,
    }, */
    ],
  },
]);
