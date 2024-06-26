const MenuItem = ({ item }) => {
  console.log(item);
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-4 mb-5 mt-6">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}.........</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuItem;
