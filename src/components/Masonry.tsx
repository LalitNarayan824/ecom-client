"use client";
import React, { useEffect, useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const products = [
  { id: 1, name: "Midnight Velour", image: "/flowers1.png" },
  { id: 2, name: "Ghost Orchid", image: "/flowers1.png" },
  { id: 3, name: "Amber Solstice", image: "/flowers1.png" },
  { id: 4, name: "Sienna Dried", image: "/flowers1.png" },
  { id: 5, name: "Lunar Peony", image: "/flowers1.png" },
  { id: 6, name: "Wild Primrose", image: "/flowers1.png" },
  { id: 7, name: "Antique Ranunculus", image: "/flowers1.png" },
  { id: 8, name: "Obsidian Lily", image: "/flowers1.png" },
];

export default function MasonryComponent() {
  const [mounted, setMounted] = useState(false);

  // Prevents hydration errors in Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#0c0c0c] min-h-screen p-5">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
      >
        <Masonry gutter="20px">
          {products.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              style={{ 
                width: "100%", 
                display: "block", 
                borderRadius: "12px" 
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}