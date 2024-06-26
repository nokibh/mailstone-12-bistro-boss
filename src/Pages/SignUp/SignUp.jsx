import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Components/SectionTitle/SocialLogin/SocialLogin';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post('/users', userInfo).then(res => {
            if (res.data.insertedId) {
              console.log('User added in database');
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User create Successfully',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
          console.log('User profile Info Updated');
        })
        .catch(error => console.log(error));
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  {...register('name', { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">PhotoUrl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-500">Password must be 6 Character</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-500">
                    Password less than 20 Character
                  </p>
                )}
                {/* {errors.password?.type === 'pattern' && (
                <p className="text-red-500">
                  Password must have one upper case,one lower case,one special
                  Character,one number
                </p>
              )} */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                <SocialLogin></SocialLogin>
              </p>
              <p>
                Already Have an account
                <Link to="/login">
                  <span className="text-blue-500"> Login</span>{' '}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
