"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-20">
       <div className="">
         <Heading
          heading="New "
          span="Arrivals"
          subheading="Check out the latest additions to our collection!"
        />
       </div>

        <div className="flex items-center flex-wrap gap-6 mt-8 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
