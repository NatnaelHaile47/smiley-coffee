"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PageProjects() {
  const [filter, setFilter] = useState("*")

  useEffect(() => {
    // Initialize Isotope if available
    if (typeof window !== "undefined" && window.Isotope) {
      const iso = new window.Isotope(".project-item-boxes", {
        itemSelector: ".project-item-box",
        layoutMode: "masonry",
        masonry: {
          columnWidth: 1,
        },
      })

      // Filter items on filter change
      if (filter) {
        iso.arrange({ filter: filter === "*" ? null : `.${filter}` })
      }

      return () => {
        iso.destroy()
      }
    }
  }, [filter])

  const projects = [
    {
      image: "/images/project-1.jpg",
      title: "Home Sweet Home Pest Protection",
      categories: ["eco-friendly"],
    },
    {
      image: "/images/project-2.jpg",
      title: "Non-Toxic Insect Repellents Methods",
      categories: ["termite", "outdoor"],
    },
    {
      image: "/images/project-3.jpg",
      title: "Innovative Pest Control Equipment",
      categories: ["outdoor", "eco-friendly"],
    },
    {
      image: "/images/project-4.jpg",
      title: "Indoor Pest Prevention Techniques",
      categories: ["commercial", "termite"],
    },
    {
      image: "/images/project-5.jpg",
      title: "Pest Control Using Nanotechnology",
      categories: ["home", "eco-friendly"],
    },
    {
      image: "/images/project-6.jpg",
      title: "Chemical-Free Mosquito Management",
      categories: ["home", "outdoor"],
    },
    {
      image: "/images/project-7.jpg",
      title: "Biorational Pest Control Approaches",
      categories: ["home", "commercial"],
    },
    {
      image: "/images/project-8.jpg",
      title: "Urban Pest Surveillance Systems Method",
      categories: ["termite"],
    },
    {
      image: "/images/project-9.jpg",
      title: "Sustainable Mosquito Control Methods",
      categories: ["commercial"],
    },
  ]

  return (
    <div className="page-projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            {/* Choose Our Projects Nav start */}
            <div className="our-project-nav wow fadeInUp" data-wow-delay="0.25s">
              <ul>
                <li>
                  <a
                    href="#"
                    className={filter === "*" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("*")
                    }}
                  >
                    all
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "home" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("home")
                    }}
                  >
                    Home Pest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "commercial" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("commercial")
                    }}
                  >
                    Commercial Pest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "eco-friendly" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("eco-friendly")
                    }}
                  >
                    Eco-Friendly Pest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "termite" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("termite")
                    }}
                  >
                    Termite & Rodent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "outdoor" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault()
                      setFilter("outdoor")
                    }}
                  >
                    Outdoor Pest
                  </a>
                </li>
              </ul>
            </div>
            {/* Choose Our Projects Nav End */}
          </div>

          <div className="col-lg-12">
            {/* Project Item Boxes start */}
            <div className="row project-item-boxes align-items-center">
              {projects.map((project, index) => (
                <div key={index} className={`col-lg-4 col-md-6 project-item-box ${project.categories.join(" ")}`}>
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                    <div className="project-image">
                      <figure>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={320}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <Link href="/project-single">
                        <Image src="/images/arrow-white.svg" alt="Arrow" width={24} height={24} />
                      </Link>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
              ))}
            </div>
            {/* Project Item Boxes End */}
          </div>
        </div>
      </div>
    </div>
  )
}

