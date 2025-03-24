"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import PageBlog from "@/components/blog/PageBlog"

export default function Blog() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <PageHeader
        title="Our blog"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "blog", url: null },
        ]}
      />
      <PageBlog />
    </main>
  )
}

