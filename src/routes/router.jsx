import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
  