"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import PageContactUs from "@/components/contact/PageContactUs"
import ContactFormSection from "@/components/contact/ContactFormSection"
import GoogleMap from "@/components/contact/GoogleMap"

export default function Contact() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <PageHeader
        title="Contact us"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "contact us", url: null },
        ]}
      />
      <PageContactUs />
      <ContactFormSection />
      <GoogleMap />
    </main>
  )
}

