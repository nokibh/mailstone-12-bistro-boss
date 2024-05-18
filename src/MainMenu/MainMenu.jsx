import { Helmet } from 'react-helmet-async';
import Cover from '../Pages/Shared/Cover';

import menuImg from '../assets/menu/banner3.jpg';
import dessertImg from '../assets/menu/dessert-bg.jpeg';
import useMenu from '../Hooks/UseMenu';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import saladImg from '../assets/menu/salad-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';
const MainMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* Main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered card item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert item */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>

      {/* Salad */}

      <MenuCategory items={salad} img={saladImg} title="Salad"></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title="Soup"></MenuCategory>
    </div>
  );
};

export default MainMenu;
