
import Image from "next/image";

const DiscountCard = ({ image, discount, title, buttonText }) => {
  return (
    <div className="relative h-[300px] w-[460px]  rounded overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0   bg-opacity-30"></div>

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded">
          {discount}
        </div>
      )}

      {/* Text & Button */}
      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
