import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import { ref } from 'firebase/storage';
// import axios from 'axios';
// import { toast } from 'react-toastify';

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = UseAuth();
  const location = useLocation();
  const { image, price, recipe, name, _id } = item;
  const [, refetch] = useCart();
  const handleAddCart = food => {
    // console.log(food,user.email);
    if (user && user.email) {
      // Send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/carts', cartItem).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `${name} Added your Card`,
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
        }
      });
      // refetch cart to update the cart items
      refetch();
    } else {
      Swal.fire({
        title: 'You Are Not Login!',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login !',
      }).then(result => {
        if (result.isConfirmed) {
          //  send to the login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 l shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-lg">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddCart(item)}
            className="btn btn-outline border-0 border-b-4 border-orange-300"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
