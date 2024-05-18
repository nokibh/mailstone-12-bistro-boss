const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-6 mb-3 border-y-4 w-4/12 mx-auto space-y-3 p-1">
      <h3 className=" ">{heading}</h3>
      <p className=" text-3xl text-yellow-600 font-bold">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
