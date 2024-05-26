import { useLoaderData } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaUtensils } from 'react-icons/fa';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, category, recipe, price, _id } = data;
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show successful popup
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name}Food Updated The Menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <h3 className="mb-6 font-bold text-center text-3xl">Update Item</h3>

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
                defaultValue={name}
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
                  defaultValue={category}
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
                  defaultValue={price}
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
                defaultValue={recipe}
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

export default UpdateItem;
