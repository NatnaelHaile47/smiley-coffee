"use client"
import { useEffect } from "react"
import HeroSection from "@/components/home/HeroSection"
import BestServices from "@/components/home/BestServices"
import AboutUs from "@/components/home/AboutUs"
import OurServices from "@/components/home/OurServices"
import OurFeatures from "@/components/home/OurFeatures"
import OurProjects from "@/components/home/OurProjects"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import OurFaqs from "@/components/home/OurFaqs"
import OurTestimonials from "@/components/home/OurTestimonials"
import OurBlog from "@/components/home/OurBlog"
import CoffeeProducts from "@/components/home/CoffeeProducts"
export default function Home() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <HeroSection />
      {/* <BestServices /> */}
      <div id="coffee-products" className="mt-5">
        <CoffeeProducts />
      </div>
      <AboutUs />
      <OurServices />
      <OurFeatures />
      {/* <OurProjects /> */}
      {/* <OurPricing /> */}
      {/* <WhyChooseUs /> */}
      <OurTestimonials />
      <OurFaqs />
      {/* <OurBlog /> */}
    </main>
  )
}

