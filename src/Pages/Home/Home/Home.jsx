import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Category from '../Category';
import Featured from '../Featured';
import PopularMenu from '../PopularMenu';
import Recommend from '../Recommend';
import Contact from './Contact';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div className="max-w-7xl max-auto py-3">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
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
      <div className="mt-4 mb-5">
        <Contact></Contact>
      </div>
      <div className="mt-4 mb-5">
        <Recommend></Recommend>
      </div>
    </div>
  );
};

export default Home;
