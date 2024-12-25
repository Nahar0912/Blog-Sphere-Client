import Newsletter from './../../components/Newsletter';
import Tips from './../../components/Tips';
import FeaturedBlog from './../../components/FeaturedBlog';
import Banner from './../../components/Banner';


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      {/* <RecentBlogs /> */}
      <Tips />
      <FeaturedBlog />
      <Newsletter />
    </div>
  );
};

export default Home;
