const Banner = () => {
  return (
    <div className="carousel w-full h-80 md:h-96 lg:h-[34rem]"> 
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="images/img-1.jpg"
          className="w-full h-full " 
          alt="Slide 1"
        />
        <div className="absolute left-5 right-5 top-1/2 flex transform -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="images/img-2.jpg"
          className="w-full h-full "
          alt="Slide 2"
        />
        <div className="absolute left-5 right-5 top-1/2 flex transform -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="images/img-3.jpg"
          className="w-full h-full "
          alt="Slide 3"
        />
        <div className="absolute left-5 right-5 top-1/2 flex transform -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img
          src="images/img-4.jpg"
          className="w-full h-full "
          alt="Slide 4"
        />
        <div className="absolute left-5 right-5 top-1/2 flex transform -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
