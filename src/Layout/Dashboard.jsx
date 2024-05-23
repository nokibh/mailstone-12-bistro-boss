import {
  FaAd,
  FaCalendar,
  FaFirstOrderAlt,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingCart,
} from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex gap-4">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400 rounded-lg">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaPaypal></FaPaypal>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <TiThMenu />
              Menu{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaFirstOrderAlt />
              Order Food
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <IoIosContacts />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content outlet */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
