import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/add-blog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />
      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
      <Route path="/featured-blogs" element={<FeaturedBlogs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRouter;
