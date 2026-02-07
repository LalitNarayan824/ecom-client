
import ModernProductList from "@/components/ModernProductList"
import BotanicalIndex from "./CategoryIndex"
import ExploreSection from "./Explore"

export const products = [
  {
    id: 1,
    name: "Midnight Velour",
    price: 3200,
    category: "Signature",
    image: "/flowers1.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Ghost Orchid",
    price: 4500,
    category: "Rarity",
    image: "/flowers1.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Amber Solstice",
    price: 2800,
    category: "Seasonal",
    image: "/flowers1.jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Sienna Dried Bouquet",
    price: 1800,
    category: "Everlasting",
    image: "/flowers1.jpg",
    isNew: false,
  },
  {
    id: 5,
    name: "Lunar Peony",
    price: 3800,
    category: "Signature",
    image: "/flowers1.jpg",
    isNew: false,
  },
  {
    id: 6,
    name: "Wild Primrose",
    price: 1200,
    category: "Miniatures",
    image: "/flowers1.jpg",
    isNew: false,
  },
  {
    id: 7,
    name: "Antique Ranunculus",
    price: 2400,
    category: "Seasonal",
    image: "/flowers1.jpg",
    isNew: true,
  },
  {
    id: 8,
    name: "Obsidian Lily",
    price: 5200,
    category: "Rarity",
    image: "/flowers1.jpg",
    isNew: false,
  }
];

const ShopPage = () => {
  return (
    <div className="w-full">
      <ModernProductList products={products}  />
      <BotanicalIndex/>
      <ExploreSection/>
    </div>
  )
}

export default ShopPage
