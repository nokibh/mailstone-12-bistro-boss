import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import MainMenu from '../MainMenu/MainMenu';
import Order from '../Pages/Order';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Secret from '../Pages/Shared/Secret';
import PrivateRoute from './PrivateRoute';
// import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import AllUsers from '../Layout/AllUsers';
import ErrorPage from '../ErrorPage';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AdminRoute from '../Pages/AdminRoute';
import ManageItem from '../Pages/Dashboard/ManageItem';
import UpdateItem from '../Pages/Dashboard/UpdateItem';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <MainMenu></MainMenu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        {' '}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      // admin only routes
      {
        path: 'addItems',
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'manageItem',
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: 'updateItem/:id',
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
