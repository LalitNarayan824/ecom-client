import Hero from "@/components/Home/Hero";
import NewArrivals from "@/components/Home/NewArrivals";
import RedGreen from "@/components/Home/RedGreen";
import ShopByCategory from "@/components/Home/ShopByCategory";
import WelcomeOverlay from "@/components/Home/WelcomeOverlay";


export default function Home() {
  return <div className="w-full">
    {/* <WelcomeOverlay/> */}
    <Hero/>
    <NewArrivals/>
    <ShopByCategory/>
    <RedGreen/>

  </div>;
}
