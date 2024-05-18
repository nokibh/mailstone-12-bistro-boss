import SectionTitle from '../../Components/SectionTitle/SectionTitle';

import MenuItem from '../Shared/MenuItem';
import useMenu from '../../Hooks/UseMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  return (
    <div>
      <section>
        <SectionTitle
          heading={'From Our Menu'}
          subHeading={'Popular Items'}
        ></SectionTitle>

        <div className="mb-5 mt-5 grid md:grid-cols-2 gap-4">
          {popular.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
