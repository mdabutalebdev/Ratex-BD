import React from "react";

const Heading = ({ heading, span, subheading }) => {
  return (
    <div className="py-5">
      <h3 className="text-3xl text-gray-600 font-bold">
        {heading}
        <span className="text-[#5caf90]">{span}</span>
      </h3>

      <p className="text-gray-600 font-normal text-base">{subheading}</p>
    </div>
  );
};

export default Heading;
