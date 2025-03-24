"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import PageServices from "@/components/services/PageServices"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import OurTestimonials from "@/components/home/OurTestimonials"

export default function Services() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <PageHeader
        title="Our services"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "services", url: null },
        ]}
      />
      <PageServices />
      <WhyChooseUs />
      <OurTestimonials aboutPage={true} />
    </main>
  )
}

