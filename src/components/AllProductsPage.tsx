"use client";
import { useState, useMemo, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; 
import { products } from "@/dummy/dummies";

const categories = ["All", "Flowers", "Plants", "Pottery", "Vases", "Seeds", "Candles"];
const sortOptions = ["Default", "Newest", "Price: Low to High", "Price: High to Low"];

export default function AllProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const urlCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [displayCount, setDisplayCount] = useState(8);

  // Sync state with URL Category
  useEffect(() => {
    if (urlCategory) {
      const found = categories.find(c => c.toLowerCase() === urlCategory.toLowerCase());
      setActiveCategory(found || "All");
    } else {
      setActiveCategory("All");
    }
  }, [urlCategory]);

  const processedProducts = useMemo(() => {
    let result = [...products].filter((p) => {
      return activeCategory === "All" || p.category.toLowerCase() === activeCategory.toLowerCase();
    });

    if (sortBy === "Price: Low to High") result.sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, sortBy]);

  const visibleProducts = processedProducts.slice(0, displayCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setDisplayCount(8);
    
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat.toLowerCase());
    }
    router.push(`/product?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-[#001043] text-[#f4f1ea] pt-24 pb-20 px-6 md:px-16">
      <header className="mb-12 border-b border-white/5 pb-10">
        <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-12">
          Collection<span className="text-zinc-600 not-italic">.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] transition-all ${
                  activeCategory === cat ? "text-amber-200" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="relative group self-end md:self-auto">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-400 border border-white/10 px-6 py-3 cursor-pointer hover:border-zinc-500 transition-colors">
              <span>Sort: {sortBy}</span>
              <ChevronDown size={14} />
            </div>
            
            <div className="absolute right-0 top-full mt-1 w-56 bg-[#0c0c0c] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="w-full text-left px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:bg-zinc-900 hover:text-white transition-colors border-b border-white/5 last:border-0"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {visibleProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-base text-zinc-200 font-light tracking-wide group-hover:text-amber-100 transition-colors">
                  {product.name}
                </h3>
                <ArrowUpRight size={14} className="text-zinc-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-center text-[11px] uppercase tracking-widest text-zinc-500">
                <span className="text-zinc-600">{product.category}</span>
                <span className="font-mono text-amber-50/70 font-semibold">₹{product.price.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {displayCount < processedProducts.length && (
        <div className="mt-32 flex justify-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 8)}
            className="px-12 py-4 text-[10px] uppercase tracking-[0.5em] text-zinc-400 border border-white/10 hover:border-white transition-all"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}