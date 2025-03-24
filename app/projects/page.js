"use client"
import { useEffect } from "react"
import PageHeader from "@/components/PageHeader"
import PageProjects from "@/components/projects/PageProjects"

export default function Projects() {
  useEffect(() => {
    // Initialize any scripts that need to run after component mount
    if (typeof window !== "undefined") {
      // Any client-side initialization code
    }
  }, [])

  return (
    <main>
      <PageHeader
        title="Our projects"
        breadcrumb={[
          { name: "home", url: "/" },
          { name: "project", url: null },
        ]}
      />
      <PageProjects />
    </main>
  )
}

