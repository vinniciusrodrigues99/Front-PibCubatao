import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Registro } from "./Pages/Registro";
import Layout from "./Components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [{
      path: "/",
      element: <Home/>
    }]
  }, 
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/registro",
    element: <Registro/>
  }
]);