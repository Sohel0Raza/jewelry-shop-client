import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/authentication/Login';
import AuthProvider from './providers/AuthProvider';
import SignUp from './pages/authentication/SignUp';
import Home from './pages/home/Home';
import AddJewelry from './pages/addJewelry/AddJewelry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addJewelry",
        element: <AddJewelry/>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
