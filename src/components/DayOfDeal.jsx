"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const DayOfDeal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-10">
        <div className="ml-12">
          <Heading
            heading="Day of the "
            span="Deals"
            subheading="Don't miss out on our exclusive offers!"
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper mt-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DayOfDeal;
