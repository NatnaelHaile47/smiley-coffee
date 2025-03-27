"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function OurServices() {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize Swiper if available
    if (typeof window !== "undefined" && window.Swiper) {
      swiperRef.current = new window.Swiper(".services-slider .swiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".services-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 4,
          },
        },
      })
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy()
      }
    }
  }, [])

  const services = [
    {
      image: "/images/our-service1.jpg",
      title: "Global Coffee Sourcing",
      description: "Discover premium coffee beans from sustainable farms across the globe.",
    },
    {
      image: "/images/our-service2.jpg",
      icon: "/images/icon-service-item-2.svg",
      title: "Expert Roasting Techniques",
      description: "Each bean is roasted to perfection, preserving its unique flavor profile.",
    },
    {
      image: "/images/our-service3.jpg",
      icon: "/images/icon-service-item-3.svg",
      title: "Custom Coffee Blends",
      description: "Tailor-made blends crafted to suit your market's unique taste.",
    },
    {
      image: "/images/our-service1.jpg",
      icon: "/images/icon-service-item-4.svg",
      title: "Efficient Logistics",
      description: "Reliable and timely delivery from origin to your doorstep.",
    },
    {
      image: "/images/our-service4.jpg",
      icon: "/images/icon-service-item-5.svg",
      title: "Quality Assurance",
      description: "Rigorous testing and certifications ensure only the best coffee reaches you.",
    },
  ]

  return (
    <div className="our-services light-bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Expert solutions for premium <span>coffee trading</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Services Slider Start */}
            <div className="services-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {services.map((service, index) => (
                    <div key={index} className="swiper-slide">
                      {/* Service Item Start */}
                      <div className="service-item">
                        {/* Service Image Start */}
                        <div className="service-image">
                            <figure className="image-anime">
                              <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                width={400}
                                height={260}
                                layout="responsive"
                              />
                            </figure>
                        </div>
                        {/* Service Image End */}

                        {/* Service Body Start */}
                        <div className="service-body">
                          {/* <div className="icon-box">
                            <Image
                              src={service.icon || "/placeholder.svg"}
                              alt={service.title}
                              width={40}
                              height={40}
                            />
                          </div> */}
                          <div className="service-content">
                            <h3>
                              {service.title}
                            </h3>
                            <p>{service.description}</p>
                          </div>
                          <div className="service-btn">
                            {/* <Link href="/service-single" className="readmore-btn">
                              read More
                            </Link> */}
                          </div>
                        </div>
                        {/* Service Body End */}
                      </div>
                      {/* Service Item End */}
                    </div>
                  ))}
                </div>
                <div className="services-pagination"></div>
              </div>
            </div>
            {/* Services Slider End */}
          </div>

          <div className="col-lg-12">
            {/* Section Footer Text Start */}
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  )
}
