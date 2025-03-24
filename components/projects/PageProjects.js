"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PageProjects() {
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Isotope) {
      const iso = new window.Isotope(".project-item-boxes", {
        itemSelector: ".project-item-box",
        layoutMode: "masonry",
        masonry: {
          columnWidth: 1,
        },
      });

      if (filter) {
        iso.arrange({ filter: filter === "*" ? null : `.${filter}` });
      }

      return () => {
        iso.destroy();
      };
    }
  }, [filter]);

  const projects = [
    {
      image: "/images/our-service1.jpg",
      title: "Ethiopian Coffee Beans",
      categories: ["organic"],
    },
    {
      image: "/images/our-service2.jpg",
      title: "Premium Robusta Exports",
      categories: ["robusta", "wholesale"],
    },
    {
      image: "/images/our-service3.jpg",
      title: "Specialty Coffee Blends",
      categories: ["specialty", "organic"],
    },
    {
      image: "/images/our-service4.jpg",
      title: "Sustainable Coffee Farming",
      categories: ["eco-friendly", "organic"],
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Direct Trade Coffee Partners",
      categories: ["fair-trade"],
    },
    {
      image: "/images/our-approach.png",
      title: "Expert Coffee Roasting",
      categories: ["roasting", "specialty"],
    },
    {
      image: "/images/our-approach2.avif",
      title: "Luxury Coffee Imports",
      categories: ["wholesale"],
    },
    {
      image: "/images/about_us.webp",
      title: "Green Coffee Supply Chain",
      categories: ["eco-friendly"],
    },
    {
      image: "/images/our-service3.jpg",
      title: "Cold Brew Innovations",
      categories: ["specialty"],
    },
  ];

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
                      e.preventDefault();
                      setFilter("*");
                    }}
                  >
                    all
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "organic" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("organic");
                    }}
                  >
                    Organic Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "specialty" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("specialty");
                    }}
                  >
                    Specialty Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "fair-trade" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("fair-trade");
                    }}
                  >
                    Fair Trade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "wholesale" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("wholesale");
                    }}
                  >
                    Wholesale Supply
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={filter === "eco-friendly" ? "active-btn" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("eco-friendly");
                    }}
                  >
                    Eco-Friendly Coffee
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
  );
}
