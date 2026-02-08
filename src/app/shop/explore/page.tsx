"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const tempImages = [
  { id: 1, url: "/flowers1.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet2.jpg", name: "Lunar Peony" },
  { id: 2, url: "/flowers2.jpg", name: "Ghost Orchid" },
  { id: 3, url: "/flowers3.jpg", name: "Amber Solstice" },
  { id: 4, url: "/bouqet1.jpg", name: "Lunar Peony" },
  { id: 1, url: "/flowers5.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet3.jpg", name: "Lunar Peony" },
  { id: 1, url: "/flowers1.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet2.jpg", name: "Lunar Peony" },
  { id: 2, url: "/flowers2.jpg", name: "Ghost Orchid" },
  { id: 3, url: "/flowers3.jpg", name: "Amber Solstice" },
  { id: 4, url: "/bouqet1.jpg", name: "Lunar Peony" },
  { id: 1, url: "/flowers5.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet3.jpg", name: "Lunar Peony" },
  { id: 1, url: "/flowers1.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet2.jpg", name: "Lunar Peony" },
  { id: 2, url: "/flowers2.jpg", name: "Ghost Orchid" },
  { id: 3, url: "/flowers3.jpg", name: "Amber Solstice" },
  { id: 4, url: "/bouqet1.jpg", name: "Lunar Peony" },
  { id: 1, url: "/flowers5.jpg", name: "Midnight Velour" },
  { id: 4, url: "/bouqet3.jpg", name: "Lunar Peony" },
];

export default function App() {
  const [images, setImages] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  // 1. Logic to "load more" from local data
  const loadMoreLocalImages = () => {
    // Simulate a slight delay for the loader effect
    setTimeout(() => {
      const nextSet = tempImages.map((img) => ({
        ...img,
        // Create a unique ID so the grid key is always unique
        uniqueId: `${img.id}-${Math.random()}`,
      }));

      setImages((prev) => [...prev, ...nextSet]);
    }, 500);
  };

  // 2. Handle Hydration for Next.js
  useEffect(() => {
    setMounted(true);
    loadMoreLocalImages(); // Initial load
  }, []);

  if (!mounted) return null;

  return (
    <div className=" min-h-screen ">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 ml-10 mt-25 mb-6 lg:mb-12 border-b border-white/5 pb-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-serif italic text-zinc-100 tracking-tight">
            Explore All<span className="text-zinc-500 not-italic">.</span>
          </h2>
          
        </div>

       
      </header>
      <InfiniteScroll
        dataLength={images.length}
        next={loadMoreLocalImages}
        hasMore={images.length < 50} // Stop after 50 images for this demo
        loader={
          <div className="flex justify-center py-10">
            <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Loading more artifacts...
            </h4>
          </div>
        }
        endMessage={
          <p className="text-center text-zinc-600 py-10 font-serif italic">
            You have reached the end of the archive.
          </p>
        }
      >
        <div className="px-4 md:px-20 lg:px-30">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 500: 2, 700: 3, 900: 4, 1200: 4 }}
          >
            <Masonry gutter="20px">
              {images.map((image) => (
                <div key={image.uniqueId} className="group relative ">
                  <img
                    src={image.url}
                    alt={image.name}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    className=""
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </InfiniteScroll>
    </div>
  );
}
