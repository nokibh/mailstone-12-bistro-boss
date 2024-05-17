import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
  return (
    <div>
      <div className="mb-5 mt-5">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="mb-5 mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
