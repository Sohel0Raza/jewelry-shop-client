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
import PrivateRoute from './routes/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllJewelry from './pages/allJewelry/AllJewelry';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allJewelry",
        element: <AllJewelry />
      },
      {
        path: "/addJewelry",
        element: <PrivateRoute><AddJewelry /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
