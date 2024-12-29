const BlogCard = ({ blog, onAddToWishlist }) => {
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
          onClick={() => onAddToWishlist(blog)}
        >
          Add to Wishlist
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => (window.location.href = `/blog/${blog._id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
