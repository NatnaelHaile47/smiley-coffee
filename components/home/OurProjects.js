"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function OurProjects() {
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
      image: "/images/man_collecting_coffe.jpg",
      title: "Home Sweet Home Pest Protection",
      categories: ["eco-friendly"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Non-Toxic Insect Repellents Methods",
      categories: ["termite"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Indoor Pest Prevention Techniques",
      categories: ["outdoor"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Pest Control Using Nanotechnology",
      categories: ["commercial"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Chemical-Free Mosquito Management",
      categories: ["home"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Biorational Pest Control Approaches",
      categories: ["home"],
    },
  ]

  return (
    <div className="our-project light-bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Portfolio</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Explore our proven track record of <span>pest-free solutions</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

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

          <div className="col-lg-12">
            {/* Our Project Button Start */}
            <div className="our-project-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link href="/projects" className="btn-default">
                View All Projects
              </Link>
            </div>
            {/* Our Project Button End */}
          </div>
        </div>
      </div>
    </div>
  )
}

