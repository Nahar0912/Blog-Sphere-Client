import { createBrowserRouter} from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home/Home';
import AddBlog from './../pages/AddBlogs/AddBlog';
import AllBlog from './../pages/AllBlogs/AllBlog';
import FeaturedBlogs from './../pages/FeaturedBlogs/FeaturedBlogs';
import Wishlist from './../pages/Wishlists/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addBlogs',
        element: <AddBlog></AddBlog>
      },
      {
        path: '/allBlogs',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
      },
      
      // {
      //   path: 'register',
      //   element: <Register></Register>
      // },
      // {
      //   path: 'signIn',
      //   element: <SignIn></SignIn>
      // }
    ]
  },
]);

export default router;