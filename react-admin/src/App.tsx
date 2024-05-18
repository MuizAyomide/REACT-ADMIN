import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";



function App() {

  const Layout = () =>{
    return(
      <div className='main'>
        <Navbar/>
<div className="container">
  <div className="menuContainer">
    <Menu/>
  </div>
  <div className="contentContainer">
    <Outlet/>
  </div>
</div>
        <Footer/>
      </div>
    )
    
  }

  const router = createBrowserRouter([
    {
path:'/',
element:<Layout/>,
children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/users',
    element:<Users/>
  }
]
    },
    
          ]);

          return  <RouterProvider router={router}/>

          
}

          export default App
