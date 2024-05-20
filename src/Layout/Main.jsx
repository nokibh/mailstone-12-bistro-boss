import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signUp');
  return (
    <div>
      <div className="mb-5 mt-5">{noHeaderFooter || <Navbar></Navbar>}</div>
      <Outlet></Outlet>
      <div className="mb-5 mt-5">{noHeaderFooter || <Footer></Footer>}</div>
    </div>
  );
};

export default Main;
