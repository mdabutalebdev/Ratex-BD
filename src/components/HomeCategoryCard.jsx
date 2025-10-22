"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HomeCategoryCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <div className=" py-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={-60}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
       <div className="container mx-auto px-24 flex gap-6">
         {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="h-[190px] w-[250px] bg-gray-100 p-4 rounded-md">
              <div className="">
                <div className="flex items-center justify-center">
                    <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={90}
                  className="object-contain"
                  priority
                />
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">{category.name}</h3>
              <p className="text-sm text-gray-600 text-center">{category.itemCount} Items</p>
            </div>
          </SwiperSlide>
        ))}
       </div>
      </Swiper>
    </div>
  );
};

export default HomeCategoryCard;
