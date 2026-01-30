import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Newsletter from "@/components/Home/NewsLetter";
import SmoothScroll from "@/components/SmoothScroll"
import WelcomeOverlay from "@/components/Home/WelcomeOverlay";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Flora — Natural Flowers & Elegant Bouquets",
    template: "%s | Flora",
  },
  description:
    "Discover premium, hand-picked flowers and elegant bouquets. Fresh blooms crafted with care and delivered to your doorstep.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* uncomment this at the end */}
        {/* <WelcomeOverlay/> */}
        <SmoothScroll>
        <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
        {children}

        </main>
        <Newsletter/>
        <Footer/>
        </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
