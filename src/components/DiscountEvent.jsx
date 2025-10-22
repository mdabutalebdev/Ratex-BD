
 
import DiscountCard from "./DiscountCard";

const DiscountEvent = () => {
  const banners = [
    {
      image: "/discount_banner_one.jpg",
      discount: "50% Off",
      title: "Women's Collection",
      buttonText: "Shop Now",
    },
    {
      image: "/discount_banner_two.jpg",
      discount: "30% Off",
      title: "Men's Collection",
      buttonText: "Shop Now",
    },
    {
      image: "/discount_banner_three.jpg",
      discount: "New Arrival",
      title: "Accessories",
      buttonText: "Shop Now",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          {banners.map((banner, index) => (
            <DiscountCard
              key={index}
              image={banner.image}
              discount={banner.discount}
              title={banner.title}
              buttonText={banner.buttonText}
            />
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountEvent;
