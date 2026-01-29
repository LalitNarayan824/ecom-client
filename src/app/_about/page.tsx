'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus, ChevronRight, ArrowDown } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <div className="bg-[#ffe7c4] text-zinc-800 font-light overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section ref={ref} className="relative h-screen overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src="/flowers5.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </motion.div>
        
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#e9c46a] uppercase tracking-[0.5em] text-xs md:text-sm mb-4 font-bold"
          >
            Creating Timeless Elegance Since 2022
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter text-amber-50"
          >
            About<span className="italic text-[#d9a5b3]">Us</span>
          </motion.h1>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ArrowDown className="text-[#e9c46a] h-8 w-8 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VALUES --- */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        <div className="space-y-10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#B38B3F] font-bold">Our Philosophy</h2>
          <p className="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.15]">
            We believe in the power of <span className="italic">fresh blooms</span> to transform any sanctuary.
          </p>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-normal">
            Every arrangement is a hand-picked story, blending artistic vision with the raw beauty of nature to inspire joy and connection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
          {[
            { title: "Sustainable", desc: "Sourced from local ethical farms" },
            { title: "Creative", desc: "Designed by master florists" },
            { title: "Freshness", desc: "Daily delivery, zero compromise" },
            { title: "Crafted", desc: "Arranged with absolute devotion" }
          ].map((val) => (
            <div key={val.title} className="border-l-2 border-[#B38B3F]/20 pl-8 space-y-3 transition-colors hover:border-[#B38B3F]">
              <h4 className="text-xl md:text-2xl font-serif text-[#1A1A1A]">{val.title}</h4>
              <p className="text-sm text-zinc-500 uppercase tracking-widest leading-snug">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS (Larger & Responsive) --- */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Happy Customers", val: "50k+" },
            { label: "Elegant Blooms", val: "250+" },
            { label: "Events Decorated", val: "3k+" },
            { label: "Years Experience", val: "4+" }
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl md:text-6xl font-serif text-[#B38B3F] mb-3">{stat.val}</h3>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS (Responsive Stack) --- */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-40 bg-[#1b2b22]">
  <div className="mb-20 text-center space-y-4">
    <h2 className="text-5xl md:text-7xl font-serif text-[#f4f1ea]">The Flora Process</h2>
    <p className="text-[#e9c46a] text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
      Nature&apos;s cycle in every step
    </p>
  </div>
  
  <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:min-h-112.5">
    {[
      { id: "01", title: "Choose Bouqet", desc: "Browse our handpicked curated collections of wild flora." },
      { id: "02", title: "Personalize Message", desc: "Add a bespoke message for your loved ones on vellum paper." },
      { id: "03", title: "Secure Checkout", desc: "Seamless and encrypted checkout for a peace of mind." },
      { id: "04", title: "Fresh Delivery", desc: "Fresh blooms arriving vibrant, fragrant, and full of life." }
    ].map((step) => (
      <div 
        key={step.id}
        /* Mobile: fixed height/block. Desktop: flex-1 with hover expansion */
        className="group relative flex-1 bg-white/5 border border-white/10 p-10 rounded-3xl transition-all duration-700 lg:flex-1 lg:hover:flex-[1.8] hover:bg-white/10 cursor-pointer overflow-hidden"
      >
        <div className="flex justify-between items-start mb-12">
          <span className="text-xl font-serif text-[#e9c46a] tracking-widest block">{step.id}</span>
          {/* Icon visible on mobile to indicate interactability */}
          <ChevronRight className="lg:hidden text-[#e9c46a] h-6 w-6" />
        </div>

        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 group-hover:text-[#e9c46a] transition-colors duration-500">
          {step.title}
        </h3>

        {/* Mobile: Always visible. Desktop: Fades in on hover */}
        <p className="text-lg text-zinc-400 leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 max-w-xs lg:max-w-60">
          {step.desc}
        </p>

        {/* Decorative Desktop Icon */}
        <ChevronRight className="hidden lg:block absolute bottom-10 right-10 text-white/20 group-hover:text-[#e9c46a] group-hover:translate-x-2 transition-all duration-500" />
      </div>
    ))}
  </div>
</section>

      {/* --- FAQ (Accordion with Larger Text) --- */}
      <section className="bg-white py-24 md:py-40 border-t border-zinc-100">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] text-center mb-20">Inquiries & Care</h2>
          <div className="divide-y divide-zinc-100">
            {AccordionContent.map((i) => (
              <AccordionItem 
                key={i.num} 
                num={i.num} 
                question={i.question} 
                answer={i.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function AccordionItem({ num, question, answer }:{num:number , question :string , answer:string}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-serif text-[#1A1A1A] group-hover:text-[#B38B3F] transition-colors">
          <span className="text-sm font-sans text-zinc-300 mr-4">0{num}</span>
          {question}
        </span>
        {isOpen ? <Minus size={20} className="text-[#B38B3F]" /> : <Plus size={20} className="text-zinc-400 group-hover:text-[#B38B3F]" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden text-base md:text-lg text-zinc-500 leading-relaxed"
      >
        <div className="pt-6 pl-10">{answer}</div>
      </motion.div>
    </div>
  )
}


const AccordionContent: { num: number; question: string; answer: string }[] = [
  {
    num: 1,
    question: "Can I schedule a delivery?",
    answer: "Absolutely. During checkout, you can select a preferred delivery date and time slot from our floral calendar to ensure your blooms arrive at the perfect moment."
  },
  {
    num: 2,
    question: "How do I place an order?",
    answer: "Simply browse our curated collections, select your favorite arrangement, add a personal note if desired, and proceed through our secure checkout process."
  },
  {
    num: 3,
    question: "Do you deliver same-day?",
    answer: "Yes, for orders placed before 12:00 PM local time, we offer same-day delivery to ensure your spontaneous gestures remain fresh and timely."
  },
  {
    num: 4,
    question: "How fresh are your flowers?",
    answer: "We source our blooms daily from sustainable local farms. Each bouquet is hand-cut and conditioned by our florists just hours before it reaches your doorstep."
  },
  {
    num: 5,
    question: "Can I customize my bouquet?",
    answer: "Our 'Bespoke Bloom' service allows you to work directly with a designer to select specific stems and color palettes for a truly unique floral statement."
  },
  {
    num: 6,
    question: "What areas do you deliver to?",
    answer: "We currently serve the greater metropolitan area and surrounding suburbs. Enter your zip code on our homepage to verify delivery availability for your specific location."
  }
];