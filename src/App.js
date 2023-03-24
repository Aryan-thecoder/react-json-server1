import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs"
import UserList from "./components/UserList"
import User from "./components/User"
import ErrorPage from "./components/ErrorPage"
import RootLayout from "./components/RootLayout"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // create browser router object
  const browserRouterObj = createBrowserRouter([
    {
      // path
      path: "/",
      // component to be loaded
      element: <RootLayout />,
      errorElement:<ErrorPage/>,
      // children of element/ RootLayout
      children: [
        {
          path: "/",               
          element: <Home />,        
        },
        {
          path: "register",         
          element: <Register />,    
        },
        {
          path: "contact-us",          
          element: <ContactUs />,        
        },
        {
          path: "users-list",         
          element: <UserList />,   
        },
        {
          path: "user/:id",          
          element: <User />      
        }
      ]
    }
  ]);

  return (
    <div className="App">
      {/* Router provider*/}
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

// default export  
export default App;

