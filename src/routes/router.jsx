import { createBrowserRouter} from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home/Home';
import AddBlog from './../pages/AddBlogs/AddBlog';
import AllBlog from './../pages/AllBlogs/AllBlog';
import FeaturedBlogs from './../pages/FeaturedBlogs/FeaturedBlogs';
import Register from './../pages/Register/Register';
import Login from './../pages/Login/Login';
import AuthLayout from './../layouts/AuthLayout';
import BlogDetailes from './../pages/BlogDetailes/BlogDetailes';
import Error from './../pages/Error/Error';
import PrivateRoute from './PrivateRoute';
import WishList from "../pages/Wishlists/Wishlist";
import UpdateBlog from './../pages/UpdateBlogs/UpdateBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addBlogs',
        element: (
          <PrivateRoute>
            <AddBlog/>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateBlogs/:id',
        element: (
          <PrivateRoute>
            <UpdateBlog/>
          </PrivateRoute>
        ),
      },
      {
        path: '/allBlogs',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/blog/:id',
        element: <BlogDetailes></BlogDetailes>
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", 
        element: <Login />,
      },
      {
        path: "register", 
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />, 
  },
]);

export default router;