import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from '../../contexts/AuthContext';

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchWishlist = async () => {
        try {
          const response = await axios.get("https://blog-sphere-server.vercel.app/wishlist", {
            params: { userEmail: user.email },
          });
          setWishlist(response.data);
        } catch (err) {
          console.error("Error fetching wishlist:", err);
          toast.error("Failed to load your wishlist.");
        }
      };

      fetchWishlist();
    }
  }, [user]);

  const handleDelete = async (blogId) => {
    try {
      const response = await axios.delete(
        `https://blog-sphere-server.vercel.app/wishlist/${blogId}`,
        { data: { userEmail: user.email } } 
      );
      if (response.status === 200) {
        toast.success("Blog removed from wishlist.");
        setWishlist(wishlist.filter((item) => item._id !== blogId));
      }
    } catch (err) {
      console.error("Error deleting wishlist item:", err);
      toast.error("Failed to delete the blog from your wishlist.");
    }
  };

  if (!user) {
    return <p>You must be logged in to view your wishlist.</p>;
  }

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">My wishlist</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border-b">Title</th>
            <th className="p-4 border-b">Description</th>
            <th className="p-4 border-b">author</th>
            <th className="p-4 border-b">Added At</th>
            <th className="p-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="p-4 border-b">{item.title}</td>
              <td className="p-4 border-b">{item.shortDescription}</td>
              <td className="p-4 border-b">{item.author}</td>
              <td className="p-4 border-b">
                {new Date(item.addedAt).toLocaleDateString()}
              </td>
              <td className="p-4 border-b space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleDetails(item.blogId)}
                >
                  Details
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
