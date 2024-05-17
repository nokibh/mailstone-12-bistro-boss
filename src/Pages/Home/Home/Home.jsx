import Banner from '../Banner/Banner';
import Category from '../Category';
import Featured from '../Featured';
import PopularMenu from '../PopularMenu';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <div className="mt-4 mb-5">
        <Banner></Banner>
      </div>
      <div className="mt-4 mb-5">
        <Category></Category>
      </div>
      <div className="mt-4 mb-5">
        <PopularMenu></PopularMenu>
      </div>
      <div className="mt-4 mb-5">
        <Featured></Featured>
      </div>
      <div className="mt-4 mb-5">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
