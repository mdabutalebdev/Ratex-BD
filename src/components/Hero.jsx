"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Navigation নেই
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const Hero = () => {
  const slides = [
    {
      image: "/banner_one.jpg",
      title: "Elevate Your Style With Us",
      desc: "Discover premium fashion pieces crafted for comfort, confidence, and class.",
    },
    {
      image: "/banner_two.jpg",
      title: "Redefine Your Everyday Look",
      desc: "Step into the world of fashion that blends modernity and elegance perfectly.",
    },
    {
      image: "/banner_three.webp",
      title: "Be Bold, Be Stylish",
      desc: "Find the trendiest outfits that make you stand out effortlessly.",
    },
  ];

  return (
    <div className="relative w-full min-h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} // ✅ pagination bullets only
        loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center px-8 md:px-16"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content - left aligned */}
              <div className="relative z-10 max-w-3xl text-left text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                  {slide.title.split("Style").length > 1 ? (
                    <>
                      Elevate Your <span className="text-[#5caf90]">Style</span>{" "}
                      With Us
                    </>
                  ) : (
                    slide.title
                  )}
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200">
                  {slide.desc}
                </p>
                <Button className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg">
                  Shop Now
                </Button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
