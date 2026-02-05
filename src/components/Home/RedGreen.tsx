import { ArrowRight, Sparkles, Heart, Recycle, Leaf } from "lucide-react"
import Image from "next/image"

const RedGreen = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* ================= SECTION 1: DEEP ESPRESSO / RED ================= */}
      <div className="relative w-full bg-[#370000] py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-end">
            
            {/* Text Side */}
            <div className="flex-1 space-y-12 order-2 lg:order-1">
              {/* Ghost Typography Surprise */}
              <h3 className="font-serif text-6xl md:text-8xl text-red-900/20 absolute top-10 left-6 select-none">
                Artisan
              </h3>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-red-600/50" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-red-500/80">Since 2020</span>
                </div>
                
                <h4 className="text-3xl md:text-5xl font-light leading-tight text-red-50/90">
                  Your trusted boutique, <br />
                  <span className="italic font-serif">rooted in care.</span>
                </h4>

                <ul className="space-y-4">
                  {[
                    { icon: Heart, text: "Highest quality silk flowers" },
                    { icon: Recycle, text: "Circular & planet-proof" },
                    { icon: Leaf, text: "Hassle-free delivery" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-red-100/40 text-sm font-light">
                      <item.icon className="h-3 w-3 text-red-600/60" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expanding Pill Button */}
              <button className="group flex h-16 w-16 items-center justify-center rounded-full border border-red-900/30 transition-all duration-500 hover:w-48 hover:bg-red-600 hover:border-red-600">
                <span className="hidden whitespace-nowrap px-4 text-xs font-bold uppercase tracking-widest text-white group-hover:block">
                  About Us
                </span>
                <ArrowRight className="h-5 w-5 text-red-600 group-hover:text-white" />
              </button>
            </div>

            {/* Image Side with Offset Frame */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="group relative aspect-3/4 w-full max-w-md mx-auto lg:ml-auto">
                {/* Floating Border */}
                <div className="absolute -inset-4 border border-red-900/20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    src="/bouqet1.jpg"
                    alt="Red bouquet"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SECTION 2: EVERGREEN MINIMAL ================= */}
      <div className="relative w-full bg-[#004e0d] py-24 lg:py-40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-end">
            
            {/* Text Side */}
            <div className="flex-1 space-y-12">
              <h3 className="font-serif text-6xl md:text-8xl text-emerald-900/20 absolute top-10 left-6 select-none">
                Spring
              </h3>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-emerald-500/50" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/80">Spring Edit</span>
                </div>
                
                <h4 className="text-3xl md:text-5xl font-light leading-tight text-emerald-50/90">
                  Thoughtfully picked <br />
                  <span className="italic font-serif">for your sanctuary.</span>
                </h4>

                <ul className="space-y-4">
                  {["Radiating pure joy", "Inspiring renewal", "Vibrant beauty"].map((text, i) => (
                    <li key={i} className="text-emerald-100/40 text-sm font-light flex items-center gap-3">
                       <span className="h-1 w-1 rounded-full bg-emerald-800" />
                       {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expanding Pill Button */}
              <button className="group flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 transition-all duration-500 hover:w-48 hover:bg-emerald-500 hover:border-emerald-500">
                <span className="hidden whitespace-nowrap px-4 text-xs font-bold uppercase tracking-widest text-black group-hover:block">
                  Shop Now
                </span>
                <ArrowRight className="h-5 w-5 text-emerald-500 group-hover:text-black" />
              </button>
            </div>

            {/* Image Side with Offset Frame */}
            <div className="flex-1">
              <div className="group relative aspect-3/4 w-full max-w-md mx-auto lg:ml-auto">
                <div className="absolute -inset-4 border border-emerald-500/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    src="/bouqet2.jpg"
                    alt="Green bouquet"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0d1310]/40 mix-blend-multiply" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default RedGreen