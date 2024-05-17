import Banner from '../Banner/Banner';
import Category from '../Category';

const Home = () => {
  return (
    <div>
      <div className="mt-4 mb-5">
        <Banner></Banner>
      </div>
      <div className="mt-4 mb-5">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
