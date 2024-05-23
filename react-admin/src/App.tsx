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
import Login from "./pages/Login/Login";
import './styles/global.scss'
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



function App() {

  const Layout = () => {

    return (
      <div className='main'>
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    )

  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/users',
          element: <Users />
        },

        {
          path: '/products/:id',
          element: <Product />
        },

        {
          path: '/users/:id',
          element: <User />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />

    }

  ]);

  return <RouterProvider router={router} />


}

export default App
