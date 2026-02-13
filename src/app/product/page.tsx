import { Suspense } from "react";
import AllProductsPage from "@/components/AllProductsPage";

export default function Page() {
  return (
    <main className="bg-[#0c0c0c] min-h-screen">
      <Suspense fallback={<CollectionSkeleton />}>
        <AllProductsPage />
      </Suspense>
    </main>
  );
}

// Minimalist fallback to maintain the boutique aesthetic
function CollectionSkeleton() {
  return (
    <div className="pt-24 pb-20 px-6 md:px-16 flex flex-col items-center justify-center h-[60vh]">
      <div className="w-12 h-12 border-t-2 border-amber-200/20 border-solid rounded-full animate-spin mb-4" />
      <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 animate-pulse">
        Indexing Archive
      </p>
    </div>
  );
}