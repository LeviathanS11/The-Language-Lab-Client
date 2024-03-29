import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import AllClass from "../pages/Class/AllClass";
import SignUp from "../SignUp-Login/SignUp";
import Login from "../SignUp-Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import MySelectedClass from "../pages/DashBoard/MySelctedClass/MySelectedClass";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddClass from "../pages/DashBoard/AddClass/AddClass";


 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/instructor',
            element:<Instructor></Instructor>
          },
          {
            path:'/all',
            element:<AllClass></AllClass>
          },
          {
            path:'/signup',
            element:<SignUp></SignUp>
          },
          {
            path:'/login',
            element:<Login></Login>
          }
          
        ]
    },
    {
      path:"dashboard",
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        {
          path:"myclass",
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:"manageUsers",
          element:<AllUsers></AllUsers>
        },
        {
          path:"addClass",
          element:<AddClass></AddClass>
        }
      ]
    }
  ])