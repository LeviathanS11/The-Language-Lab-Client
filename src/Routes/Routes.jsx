import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import AllClass from "../pages/Class/AllClass";
import SignUp from "../SignUp-Login/SignUp";
import Login from "../SignUp-Login/Login";


 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
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
    }
  ])