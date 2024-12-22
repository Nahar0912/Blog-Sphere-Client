import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Blog Website</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-blog" className="hover:underline">Add Blog</Link>
          <Link to="/all-blogs" className="hover:underline">All Blogs</Link>
          <Link to="/featured-blogs" className="hover:underline">Featured Blogs</Link>
          <Link to="/wishlist" className="hover:underline">Wishlist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
