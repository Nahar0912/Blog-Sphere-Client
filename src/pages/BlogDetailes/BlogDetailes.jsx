import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams(); // Blog ID from URL
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState({
    email: 'user@example.com',
    name: 'John Doe',
    profile: 'path/to/profile.jpg',
  }); // Replace with actual user data from context/auth provider
  const [isOwner, setIsOwner] = useState(false);

  // Fetch blog details and comments
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(response.data);
        setIsOwner(response.data.authorEmail === currentUser.email); // Check if the user is the blog owner
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchBlogDetails();
    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await axios.post('http://localhost:5000/comments/add', {
        blogId: id,
        userName: currentUser.name,
        userProfile: currentUser.profile,
        commentText: newComment,
      });
      setComments((prev) => [...prev, response.data.result.ops[0]]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleUpdateBlog = () => {
    navigate(`/blog/update/${id}`);
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8">
      <div className="blog-details">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <p className="text-gray-500">Category: {blog.category}</p>
        <p className="text-gray-500">Author: {blog.authorName}</p>

        {isOwner && (
          <button
            onClick={handleUpdateBlog}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Update Blog
          </button>
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
