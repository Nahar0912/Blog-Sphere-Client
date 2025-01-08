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
        const response = await axios.get('https://blog-sphere-server.vercel.app/blogs'); 
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
      const matchesSearchText = blog.title.toLowerCase().includes(searchText.toLowerCase());
      return matchesCategory && matchesSearchText;
    });
    setFilteredBlogs(filtered);
  }, [selectedCategory, searchText, blogs]);

  const handleSearch = () => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBlogs(filtered);
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
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
