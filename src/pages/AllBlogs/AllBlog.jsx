import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './../../components/BlogCard';

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs'); // Replace with your API URL
        setBlogs(response.data);
        setFilteredBlogs(response.data); // Initialize filtered blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs dynamically by selected category
  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
      const matchesSearchText = blog.title.toLowerCase().includes(searchText.toLowerCase());
      return matchesCategory && matchesSearchText;
    });
    setFilteredBlogs(filtered);
  }, [selectedCategory, searchText, blogs]);

  // Handle search button click
  const handleSearch = () => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  // Handle adding to wishlist
  const handleAddToWishlist = async (blog) => {
    try {
      const userEmail = "user@example.com"; // Replace with logged-in user's email
      const response = await axios.post('http://localhost:5000/watchlist/add', {
        userEmail,
        blogId: blog._id,
        gameTitle: blog.title,
        gameCover: blog.image,
        blogDescription: blog.shortDescription,
        category: blog.category,
      });
      alert(response.data.message || 'Blog added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert(error.response?.data?.error || 'Failed to add to wishlist.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="Search blogs by title"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <select
          className="border rounded p-2 w-full sm:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="SRE">SRE</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} onAddToWishlist={handleAddToWishlist} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
