import { Product } from "@/dummy/dummies"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product } : {product : Product}) => {
  return (
    <Link href={`/products/${product.id}`}>
    <div className="group w-full">
      {/* Image Wrapper */}
      <div className="relative w-full overflow-hidden bg-[#E9ECE7] aspect-3/4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Text */}
      <div className="mt-4 space-y-1 flex items-center justify-between">
        <h3 className="text-sm font-light text-[#0F2F25]">
          {product.name}
        </h3>
        <p className="text-sm text-[#6B7C73]">
          ₹{product.price}
        </p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
