"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import AboutUsSection from "@/components/about/AboutUsSection"
import OurApproach from "@/components/about/OurApproach"
import OurPassion from "@/components/about/OurPassion"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import OurLegacy from "@/components/about/OurLegacy"
import OurCommitment from "@/components/about/OurCommitment"
import OurTeam from "@/components/about/OurTeam"
import OurFaqs from "@/components/home/OurFaqs"
import OurTestimonials from "@/components/home/OurTestimonials"

export default function About() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <PageHeader
        title="About us"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "about us", url: null },
        ]}
      />
      <AboutUsSection />
      <OurApproach />
      <OurPassion />
      <WhyChooseUs />
      <OurLegacy />
      {/* <OurCommitment /> */}
      <OurTeam />
    </main>
  )
}

