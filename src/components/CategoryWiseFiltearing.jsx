"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

const CategoryWiseFiltearing = ({ categoryesData, products }) => {
  const [filterCategory, setFilterCategory] = useState("All");

  const handelCategoryClick = (category) => {
    setFilterCategory(category);
  };

  // Filter products based on selected category
  const categoryFiltearing =
    filterCategory === "All"
      ? products
      : products.filter((product) => product.category === filterCategory);

  return (
    <div className="ml-10  ">
      {/* Category buttons */}
      <div className="flex items-center gap-4">
        {categoryesData.slice(0, 5).map((category) => (
          <button
            key={category.id}
            onClick={() => handelCategoryClick(category.name)}
            className={`px-3 py-1 rounded ${
              filterCategory === category.name
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Filtered Products below */}
      <div className="flex flex-wrap gap-6 mt-6">
        {categoryFiltearing.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseFiltearing;
