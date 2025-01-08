import Newsletter from './../../components/Newsletter';
import Tips from './../../components/Tips';
import Banner from './../../components/Banner';
import RecentBlogs from './../../components/RecentBlogs';
import Testimonials from './../../components/Testimonials';


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <RecentBlogs />
      <Tips />
      <Testimonials/>
      <Newsletter />
    </div>
  );
};

export default Home;
