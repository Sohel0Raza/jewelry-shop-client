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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
