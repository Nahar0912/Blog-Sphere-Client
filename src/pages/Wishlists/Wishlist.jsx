import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from '../../contexts/AuthContext';

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchWatchlist = async () => {
        try {
          const response = await axios.get("http://localhost:5000/wishlist", {
            params: { userEmail: user.email },
          });
          setWatchlist(response.data);
        } catch (err) {
          console.error("Error fetching watchlist:", err);
          toast.error("Failed to load your watchlist.");
        }
      };

      fetchWatchlist();
    }
  }, [user]);

  if (!user) {
    return <p>You must be logged in to view your watchlist.</p>;
  }

  if (watchlist.length === 0) {
    return <p>Your watchlist is empty.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border-b">Title</th>
            <th className="p-4 border-b">Description</th>
            <th className="p-4 border-b">author</th>
            <th className="p-4 border-b">Added At</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="p-4 border-b">{item.title}</td>
              <td className="p-4 border-b">{item.shortDescription}</td>
              <td className="p-4 border-b">{item.author}</td>
              <td className="p-4 border-b">
                {new Date(item.addedAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
