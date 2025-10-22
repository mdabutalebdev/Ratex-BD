import DayOfDeal from "@/components/DayOfDeal";
import DiscountEvent from "@/components/DiscountEvent";
import Hero from "@/components/Hero";
import MiddleBanner from "@/components/MiddleBanner";
import NewArrivel from "@/components/NewArrivel";
import OurCategory from "@/components/OurCategory";
 

export default function Home() {
  return (
   <div>
     <Hero/>
     <OurCategory/>
    <DayOfDeal/>
    <MiddleBanner/>
    <NewArrivel/>
    <DiscountEvent/>
   </div>
  );
}
