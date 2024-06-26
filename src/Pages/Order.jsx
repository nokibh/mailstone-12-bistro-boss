import { useState } from 'react';
import orderImg from '../assets/shop/banner2.jpg';
import Cover from './Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/UseMenu';
import FoodCard from './Shared/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drink = menu.filter(item => item.category === 'drinks');
  return (
    <div className="text-center">
      <Cover img={orderImg} title="Order Food"></Cover>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          {' '}
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          {' '}
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          {' '}
          <OrderTab items={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
