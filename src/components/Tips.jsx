

const Tips = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Blogging Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-bold">Tip 1: Write Engaging Titles</h3>
          <p className="text-gray-600 mt-2">
            A captivating title grabs attention and entices readers to click.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-bold">Tip 2: Use High-Quality Images</h3>
          <p className="text-gray-600 mt-2">
            Images make your blogs more visually appealing and engaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;
