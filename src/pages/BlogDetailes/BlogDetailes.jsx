import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from './../../contexts/AuthContext';

const BlogDetails = () => {
  const { id } = useParams(); // Blog ID from URL
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Get logged-in user context

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isOwner, setIsOwner] = useState(false);

  // Fetch blog details and comments
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(response.data);
        if (user?.email === response.data.authorEmail) {
          setIsOwner(true); // Check if the current user is the blog owner
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchBlogDetails();
    fetchComments();
  }, [id, user]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await axios.post("http://localhost:5000/comments/add", {
        blogId: id,
        userName: user?.name,
        userProfile: user?.profile || "",
        commentText: newComment,
      });
      setComments((prev) => [...prev, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteBlog = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const token = user?.accessToken; // Replace with your token logic
        await axios.delete(`http://localhost:5000/blogs/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        navigate("/allBlogs"); 
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const handleUpdateBlog = () => {
    navigate(`/updateBlogs/${id}`); // Redirect to update page
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8">
      <div className="blog-details">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{blog.longDescription}</p>
        <p className="text-gray-500">Category: {blog.category}</p>
        <p className="text-gray-500">Author: {blog.author}</p>

        {isOwner && (
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpdateBlog}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Blog
            </button>
            <button
              onClick={handleDeleteBlog}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Blog
            </button>
          </div>
        )}
      </div>

      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {!isOwner ? (
          <div className="add-comment mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Add your comment..."
            />
            <button
              onClick={handleAddComment}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </div>
        ) : (
          <p className="text-red-500">Cannot comment on your own blog.</p>
        )}

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment._id} className="comment p-4 border-b">
              <div className="flex items-center mb-2">
                <img
                  src={comment.userProfile}
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <p className="font-bold">{comment.userName}</p>
              </div>
              <p className="text-gray-700">{comment.commentText}</p>
              <p className="text-gray-500 text-sm">
                {new Date(comment.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
