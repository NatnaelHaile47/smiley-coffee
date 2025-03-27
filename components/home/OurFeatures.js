"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function OurFeatures() {
  const features = [
    {
      icon: "/images/best-service.svg",
      title: "Global Sourcing",
      description: "We source premium coffee beans from sustainable farms worldwide.",
      delay: 0,
    },
    {
      icon: "/images/best-service.svg",
      title: "Quality Assurance",
      description: "Every bean is rigorously tested to ensure only the best reaches you.",
      delay: 0.2,
    },
    {
      icon: "/images/best-service.svg",
      title: "Sustainable Practices",
      description: "Our direct trade partnerships promote eco-friendly and fair practices.",
      delay: 0.4,
    },
    {
      icon: "/images/best-service.svg",
      title: "Custom Blends",
      description: "Tailor-made blends crafted to suit your unique taste preferences.",
      delay: 0.6,
    },
  ];

  return (
    <div className="our-features light-bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-features-content">
              <div className="section-title">
                <h3 className="wow fadeInUp" 
                >Our Features</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Your trusted partner in <span>premium coffee trading</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We pride ourselves on delivering the highest quality coffee sourced from sustainable, direct trade farms. Our commitment to excellence ensures that every cup delights your senses.
                </p>
              </div>

              <div className="our-features-list">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="features-item wow fadeInUp"
                    data-wow-delay={`${feature.delay}s`}
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow : "0px 10px 20px rgba(0, 0, 0, 0.1)",
                      borderRadius:10,
                      padding:"10px"

                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
                      e.currentTarget.style.padding = "10px"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div className="icon-box">
                      <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={30} height={30} />
                    </div>
                    <div className="features-item-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="features-image">
              <figure className="image-anime reveal">
                <Image
                  src="/images/about_us.webp"
                  alt="Premium Coffee"
                  width={600}
                  height={536}
                  layout="responsive"
                />
              </figure>

              <div className="contact-us-circle">
                <Link href="/contact">
                  <Image src="/images/contact-us-circle.svg" alt="Contact Us" width={126} height={126} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
