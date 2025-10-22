import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Ratex Bd</h1>
          <p className="text-gray-400">
            Ratex Bd is your one-stop destination for stylish and modern clothing. 
            Discover the latest trends and exclusive collections at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Customer Care</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Payment Options</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">123 Fashion Street, Dhaka, Bangladesh</p>
          <p className="text-gray-400 mb-2">Email: support@ratexbd.com</p>
          <p className="text-gray-400 mb-4">Phone: +880 1234 567890</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ratex Bd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
