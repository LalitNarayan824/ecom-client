import CelestialBloomShader from "@/components/BloomShader";
import FractalBloomHero from "@/components/FractalTree";
import Hero from "@/components/Home/Hero";
import NewArrivals from "@/components/Home/NewArrivals";
import RedGreen from "@/components/Home/RedGreen";
import ShopByCategory from "@/components/Home/ShopByCategory";



export default function Home() {
  return <div className="w-full">
    
    <Hero/>


    {/* experimental */}
    {/* <FractalBloomHero/> */}
    {/* <CelestialBloomShader/> */}

    {/* <NewArrivals/> */}
    <ShopByCategory/>
    <RedGreen/>

  </div>;
}
