const Testimonials = () => {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-2xl font-bold text-center">What Our Readers Say</h2>
        <p className="mt-2 text-center text-gray-600">
          Hear from our amazing community of readers!
        </p>
        <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              &ldquo;This blog has been a game-changer for me. The insights are spot-on and always relevant!&rdquo;
            </p>
            <h4 className="mt-4 font-semibold">— Sarah J.</h4>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              &ldquo;I love how well-researched the articles are. Its my go-to source for information!&rdquo;
            </p>
            <h4 className="mt-4 font-semibold">— David P.</h4>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              &ldquo;Beautifully written blogs that inspire and inform. Highly recommend!&rdquo;
            </p>
            <h4 className="mt-4 font-semibold">— Maria K.</h4>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  