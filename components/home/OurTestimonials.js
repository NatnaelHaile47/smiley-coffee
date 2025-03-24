"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function OurTestimonials({ aboutPage }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize Swiper if available
    if (typeof window !== "undefined" && window.Swiper) {
      swiperRef.current = new window.Swiper(".testimonial-slider .swiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".testimonial-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
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

  const testimonials = [
    {
      image: "/images/user.jpg",
      name: "Oliver Spalton",
      position: "Founder at Global Bean Traders",
      content:
        "Their sourcing network is unparalleled. We now have access to the world's finest coffee beans, delivered with impeccable quality!",
    },
    {
      image: "/images/user.jpg",
      name: "Ronald Richards",
      position: "CEO at Coffee Import Co.",
      content:
        '"Thanks to their expert logistics and direct trade practices, our supply chain has never been smoother. Truly a game-changer for our business."',
    },
    {
      image: "/images/user.jpg",
      name: "Brooklyn Simmons",
      position: "Managing Director at Brew & Beyond",
      content:
        '"Their commitment to sustainability and quality assurance makes them our trusted partner for premium coffee imports."',
    },
    {
      image: "/images/user.jpg",
      name: "Emily Williams",
      position: "Chairwoman at Artisan Roasters",
      content:
        '"I highly recommend their services. From custom blends to efficient delivery, they consistently exceed our expectations."',
    },
  ]

  const testimonialStyle = {
    position: 'relative',
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    }
  }

  const hoverEffectStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.3s ease',
    padding: '30px',
    textAlign: 'center',
  }

  return (
    <div className={`our-testimonials ${aboutPage ? "about-testimonials" : ""}`}>
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Testimonials</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Trusted by coffee experts for premium <span>trading solutions</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="swiper-slide">
                      <div 
                        className="testimonial-item"
                        style={testimonialStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                          e.currentTarget.querySelector('.testimonial-hover-effect').style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                          e.currentTarget.querySelector('.testimonial-hover-effect').style.opacity = '0';
                        }}
                      >
                        <div className="testimonial-author">
                          <div className="author-image">
                            <figure className="image-anime">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                              />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
                          <p>{testimonial.content}</p>
                        </div>
                        <div 
                          className="testimonial-hover-effect"
                          style={hoverEffectStyle}
                        >
                          <div className="hover-content">
                            <i className="fa-solid fa-quote-left" style={{ fontSize: '40px', color: '#c8a97e', marginBottom: '20px' }}></i>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>{testimonial.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="testimonial-pagination"></div>
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
        </div>
      </div>
    </div>
  )
}
