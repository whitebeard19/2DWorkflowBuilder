import React from 'react'
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { AppProvider } from './context/AppContext';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <AppProvider>
        <Outlet />
      </AppProvider>    
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Main /></ProtectedRoute>
      },
      {
        path:"/login",
        element: <Login/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

