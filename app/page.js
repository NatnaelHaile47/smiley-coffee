"use client"
import { useEffect } from "react"
import HeroSection from "@/components/home/HeroSection"
import BestServices from "@/components/home/BestServices"
import AboutUs from "@/components/home/AboutUs"
import OurServices from "@/components/home/OurServices"
import OurFeatures from "@/components/home/OurFeatures"
import OurProjects from "@/components/home/OurProjects"
import OurPricing from "@/components/home/OurPricing"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import OurFaqs from "@/components/home/OurFaqs"
import OurTestimonials from "@/components/home/OurTestimonials"
import CtaBox from "@/components/home/CtaBox"
import OurBlog from "@/components/home/OurBlog"

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
      <BestServices />
      <AboutUs />
      <OurServices />
      <OurFeatures />
      <OurProjects />
      {/* <OurPricing /> */}
      <WhyChooseUs />
      <OurTestimonials />
      <OurFaqs />
      <OurBlog />
    </main>
  )
}

