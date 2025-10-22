"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar, FaEye } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="group bg-white w-[250px] h-[350px] border border-gray-300 relative mx-auto">
      <div className="relative bg-gray-50 flex items-center justify-center">
        {(product.onSale || product.isNew) && (
          <span
            className={`absolute top-3 left-3 ${
              product.isNew ? "bg-[#5caf90]" : "bg-red-500"
            } text-white text-xs font-semibold px-2 py-1 rounded`}
          >
            {product.isNew ? "NEW" : "SALE"}
          </span>
        )}

        {/* Hover icons */}
        <div className="absolute top-4 right-[-40px] group-hover:right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white p-2 shadow hover:bg-gray-100 transition">
            <CiHeart className="text-gray-700" size={14} />
          </button>
          <button className="bg-white p-2 shadow hover:bg-gray-100 transition">
            <FaEye className="text-gray-700" size={14} />
          </button>
          <button className="bg-white p-2 shadow hover:bg-gray-100 transition">
            <GoGitCompare className="text-gray-700" size={14} />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={100}
          className="  p-4"
        />
      </div>

      <div className="pl-4 pb-4 pt-2">
        <p className="text-gray-400 text-sm mb-1">{product.category}</p>
        <h3 className="text-base font-medium text-gray-600 mb-2">
          {product.title}
        </h3>

        <div className="flex mb-2">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-400 line-through text-sm">
            ${product.oldPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
