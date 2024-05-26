const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-6 mb-3 border-y-4 w-4/12 mx-auto space-y-3 p-1">
      <p className="  text-yellow-600 font-bold">{subHeading}</p>
      <h3 className="text-3xl ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
