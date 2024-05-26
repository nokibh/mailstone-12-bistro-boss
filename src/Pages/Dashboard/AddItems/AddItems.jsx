import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async data => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show successful popup
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name}Food Added The Menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <SectionTitle
          heading="add an item"
          subHeading="Whats new"
        ></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className=" w-full mb-4">
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="flex gap-6">
              {/* category */}
              <label className=" w-full mb-4">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  {...register('category', { required: true })}
                  className="select select-bordered w-full "
                >
                  <option value="dessert">dessert</option>
                  <option value="salad">salad</option>
                  <option value="pizza">pizza</option>
                  <option value="drinks">drinks</option>
                  <option value="soup">soup</option>
                </select>
              </label>

              {/* Price */}
              <label className=" w-full mb-4">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  {...register('price', { required: true })}
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register('recipe', { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Detail"
              ></textarea>
            </label>
            <div className="form-control mt-5 mb-5">
              <input
                {...register('image', { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <button className="btn bg-orange-300">
              Add Item
              <FaUtensils className="ml-3"></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
