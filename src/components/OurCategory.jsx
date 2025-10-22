import React from "react";
import HomeCategoryCard from "./HomeCategoryCard";

const OurCategory = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold   mb-8">Our <span className="text-[#5CAF90]">Categories</span></h2>
        <div className="">
          <HomeCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
