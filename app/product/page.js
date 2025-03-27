"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import CoffeeProducts from "@/components/home/CoffeeProducts"

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
        title="Our Products"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "products", url: null },
        ]}
      />
      <CoffeeProducts />
    </main>
  )
}

