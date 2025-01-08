import { useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthContext from './../contexts/AuthContext';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToWishlist = async () => {
    if (!user) {
      toast.error("You need to be logged in to add to the watchlist.");
      return;
    }

    const blogData = {
      blogId: blog._id,
      title: blog.title,
      image: blog.image,
      shortDescription: blog.shortDescription,
      category: blog.category,
      author: blog.author,
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      const response = await axios.post("https://blog-sphere-server.vercel.app/wishlist/add", blogData);
      if (response.status === 200) {
        toast.success("Blog added to your watchlist!");
      } else {
        toast.error("Failed to add to watchlist.");
      }
    } catch (err) {
      console.error("Error adding to watchlist:", err);
      toast.error("An error occurred while adding to the watchlist.");
    }
  };

  return (
    <div className="border rounded shadow-md p-4 flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-700 mb-4">{blog.shortDescription}</p>
      <div className="mt-auto flex justify-between items-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BlogCard;
