import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import img from '../../assets/home/featured.jpg';
import './featured.css';
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 opacity-90">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="lg:flex justify-center items-center gap-3 pb-20 pt-12 px-36 ">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can 1 get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            praesentium corrupti, dolorum provident adipisci hic, excepturi nam
            quibusdam dolore architecto iste sed voluptates quas neque nihil
            quam accusamus exercitationem dicta.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
