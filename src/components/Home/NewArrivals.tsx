import { flowers } from "@/dummy/dummies"
import ProductCard from "../ProductCard"

const NewArrivals = () => {
  const items = flowers.slice(0, 4)

  return (
    <section className="w-full bg-[#F6F7F4] py-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <span className="text-sm uppercase tracking-widest text-[#6B7C73]">
              New Arrivals
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0F2F25] font-serif">
              Freshly Curated Bouquets
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-sm text-[#0F2F25] transition-opacity hover:opacity-70">
            <span className="border-b border-transparent pb-0.5 transition-all group-hover:border-[#0F2F25]">
              See all bouquets
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
