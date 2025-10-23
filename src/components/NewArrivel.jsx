 
import Button from "./Button";
import CategoryWiseFiltearing from "./CategoryWiseFiltearing";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
 

const NewArrivals = async () => {
  const response = await fetch("http://localhost:8000/products");
  const productAllData = await response.json();

  const cateRes = await fetch("http://localhost:8000/categories");
  const categoryesData = await cateRes.json();

  return (
    <div className="py-16">
      <div className="container mx-auto px-20">
        {/* Heading + Category row */}

        <div className="flex">
          <div className=" ">
         <Heading heading="New" span="Arrivals" subheading="Check out the latest products added to our collection." />
          </div>

          <div className=" ">
            <CategoryWiseFiltearing
              categoryesData={categoryesData}
              products={productAllData}
           
            />
          </div>
        </div>
      

        {/* View All button */}
        <div className="flex justify-center mt-10">
          <Button className="cursor-pointer rounded-md">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
