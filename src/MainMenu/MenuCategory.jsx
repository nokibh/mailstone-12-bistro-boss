import { Link } from 'react-router-dom';
import Cover from '../Pages/Shared/Cover';
import MenuItem from '../Pages/Shared/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="mb-5 my-16 grid md:grid-cols-2 gap-4">
        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-7 mt-3">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
