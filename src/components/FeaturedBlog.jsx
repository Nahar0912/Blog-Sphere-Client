
const FeaturedBlog = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Featured Blog</h2>
      <div className="bg-white shadow-md rounded-md p-8">
        <h3 className="text-lg font-bold">Blog Title: Featured Blog</h3>
        <p className="text-gray-600 mt-4">
          This featured blog provides an in-depth analysis of the current trends in blogging.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Read More
        </button>
      </div>
    </section>
  );
};

export default FeaturedBlog;
