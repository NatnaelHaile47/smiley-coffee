"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="preloader" style={{ display: loading ? "flex" : "none" }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image src="/images/smily-coffee-logo.png" alt="Loading" width={400} height={70} />
        </div>
      </div>
    </div>
  )
}

