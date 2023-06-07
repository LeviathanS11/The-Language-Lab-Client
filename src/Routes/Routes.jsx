import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import AllClass from "../pages/Class/AllClass";


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
          }
          
        ]
    }
  ])