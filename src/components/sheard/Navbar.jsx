import { IoMdCall } from "react-icons/io";
import { FaRegHeart, FaWhatsapp } from "react-icons/fa6";
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Button from "../Button";
import Link from "next/link";
import { TbCategory } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto flex justify-between items-center px-24">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <IoMdCall className="hover:text-[#5CAF90] duration-300" />
              <span>+880 1234 56789</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaWhatsapp className="hover:text-[#5CAF90] duration-300" />
              <span>+880 1234 56789</span>
            </div>
          </div>
          <div className="">
            <p className="text-gray-600 font-normal text-[14px]">
              Shop Online at the Speed of the World
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-gray-600 font-normal text-[14px]">Help?</p>
            <p className="text-gray-600 font-normal text-[14px]">
              Track Order?
            </p>
            <p className="text-gray-600 font-normal text-[14px]">English</p>
            <p className="text-gray-600 font-normal text-[14px]">Dollar</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-24 py-4 grid grid-cols-3 items-center">
          <div className="">
            <h3 className="font-bold text-3xl text-gray-700">
              Ratex <span className="text-[#5CAF90]">BD</span>{" "}
            </h3>
          </div>
          <div className="flex gap-5">
            <Link href="/" className="font-medium text-gray-700 hover:text-[#5CAF90] duration-300">Home</Link>
            <Link href="/category" className="font-medium text-gray-700 hover:text-[#5CAF90] duration-300">Category</Link>
            <Link href="/product" className="font-medium text-gray-700 hover:text-[#5CAF90] duration-300">Product</Link>
            <Link href="/blog" className="font-medium text-gray-700 hover:text-[#5CAF90] duration-300">Blog</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-[#5CAF90] duration-300">Contact</Link>
          </div>
          <div className="flex items-center gap-8 ml-auto">
            <div className="flex items-center gap-1">
              <CiUser className="text-2xl" />
              <div className="">
                <p className="text-[14px] leading-tight">Account</p>
                <p className="text-base font-bold text-gray-600 leading-tight">Login</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <FaRegHeart className="text-2xl" />
              <div className="">
                <p className="text-[14px] leading-tight">Wishlist</p>
                <p className="text-base font-bold text-gray-600 leading-tight">3-items</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineShoppingBag className="text-2xl" />
              <div className="">
                <p className="text-[14px] leading-tight">Card</p>
               <p className="text-base font-bold text-gray-600 leading-tight">3-items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-24 py-4  flex justify-between items-center">
          <div className="">
            <Button className="flex items-center gap-2 py-3">
              <TbCategory />
              All Categories
              <MdKeyboardArrowDown />
            </Button>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search Product..."
              className="w-[600px] mx-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-none"
            />
            <CiSearch className="-translate-x-6 translate-y-3" />
          </div>
          <div className="">
            <Button className="flex items-center gap-2 py-3">
              <CiLocationOn />
              NewYork
              <MdKeyboardArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
