import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthContext from "../../contexts/AuthContext";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext); 
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    shortDescription: "",
    longDescription: "",
  });

  // Fetch the blog details on component mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://blog-sphere-server.vercel.app/blogs/${id}`);
        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog data.");
      }
    };

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You need to be logged in to update the blog.");
      return;
    }

    try {
      const response = await axios.put(`https://blog-sphere-server.vercel.app/blogs/update/${id}`,formData);
      if (response.status === 200) {
        toast.success("Blog updated successfully!");
        navigate(`/blog/${id}`);
      }
    } catch (error) {
      console.error("Error updating blog:", error.response?.data || error);
      toast.error("Failed to update blog.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="SRE">SRE</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Short Description</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Long Description</label>
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            rows="6"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
