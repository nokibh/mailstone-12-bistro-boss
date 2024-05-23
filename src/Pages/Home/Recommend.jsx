import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useMenu from '../../Hooks/UseMenu';
import OrderTab from '../OrderTab';

const Recommend = () => {
  const [menu] = useMenu();

  const dessert = menu.filter(item => item.category === 'dessert');
  const dessertSlice = dessert.slice(0, 3);
  console.log(dessertSlice);
  return (
    <div>
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div>
        <OrderTab items={dessertSlice}></OrderTab>
      </div>
    </div>
  );
};

export default Recommend;
