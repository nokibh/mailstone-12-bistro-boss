import { useEffect } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useState } from 'react';
import MenuItem from '../Shared/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');

        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <div>
      <section>
        <SectionTitle
          heading={'From Our Menu'}
          subHeading={'Popular Items'}
        ></SectionTitle>

        <div className="mb-5 mt-5 grid md:grid-cols-2 gap-4">
          {menu.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
