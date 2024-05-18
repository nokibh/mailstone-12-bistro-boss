import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Recommend = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'salad');

        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <div>
      <div>{menu.length}</div>
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
    </div>
  );
};

export default Recommend;
