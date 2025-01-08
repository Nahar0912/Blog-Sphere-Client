import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from './BlogCard';

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get("https://blog-sphere-server.vercel.app/blogs"); 
        const sortedBlogs = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6); 
        setRecentBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      }
    };

    fetchRecentBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
