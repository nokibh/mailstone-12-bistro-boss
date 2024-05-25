import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then(result => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post('/users', userInfo).then(res => {
        console.log(res.data);
        navigate('/');
      });
    });
  };

  return (
    <div className="">
      <div className="divider divider-secondary"></div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn">
          Google
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
