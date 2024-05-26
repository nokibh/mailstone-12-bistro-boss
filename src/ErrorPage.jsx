import { Link } from 'react-router-dom';
import errorImg from './assets/contact/404.gif';
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-error-bg bg-cover bg-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img src={errorImg} alt="Error" className="h-96 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">Oops! Page not found</h1>
        <p className="text-gray-600 mb-6">
          We can't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
