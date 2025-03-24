"use client"
import { useEffect } from "react"
import Image from "next/image"

export default function AboutUsSection() {
  useEffect(() => {
    // Initialize counter if jQuery and counterUp are available
    if (typeof window !== "undefined" && window.jQuery && window.jQuery.fn.counterUp) {
      window.jQuery(".counter").counterUp({ delay: 6, time: 3000 })
    }
  }, [])

  const aboutFeatures = [
    "Premium Coffee Sourcing",
    "Sustainable Farming Practices",
    "Global Export Network",
    "Custom Coffee Blends",
    "Direct Trade Partnerships",
    "State-of-the-Art Roasting",
    "Quality Assurance",
    "Dedicated Customer Support",
  ]

  const counterItems = [
    { count: 20, suffix: "+", text: "Years in Coffee Industry" },
    { count: 5, suffix: "K", text: "Tons of Coffee Exported" },
    { count: 30, suffix: "", text: "Global Partners" },
    { count: 99, suffix: "%", text: "Customer Satisfaction" },
  ]

  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* About Us Images Start */}
            <div className="about-us-images">
              {/* About Us Image Start */}
              <div className="about-us-image">
                <figure className="image-anime">
                  <Image src="/images/about_us.webp" alt="About Us" width={400} height={632} layout="responsive" />
                </figure>
              </div>
              {/* About Us Image End */}

              {/* About Us Circle Image Start */}
              {/* <div className="about-us-circle-img-1">
                <figure className="image-anime">
                  <Image src="/images/about-coffee-1.jpg" alt="About Coffee" width={160} height={160} />
                </figure>
              </div> */}
              {/* About Us Circle Image End */}

              {/* About Us Circle Image Start */}
              {/* <div className="about-us-circle-img-2">
                <figure className="image-anime">
                  <Image src="/images/about-coffee-2.jpg" alt="About Coffee" width={160} height={160} />
                </figure>
              </div> */}
              {/* About Us Circle Image End */}
            </div>
            {/* About Us Images End */}
          </div>

          <div className="col-lg-7">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Sourcing the finest coffee, <span>delivering globally</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We are committed to delivering the best coffee beans and roasted blends to markets worldwide. With
                  a focus on quality, sustainability, and customer satisfaction, we ensure every cup brewed with our
                  coffee tells a story of excellence.
                </p>
              </div>
              {/* Section Title End */}

              <div className="about-us-body">
                <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    {aboutFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="about-us-video-image wow fadeInUp" data-wow-delay="0.4s">
                  {/* <figure className="image-anime">
                    <Image
                      src="/images/about-coffee-video.jpg"
                      alt="Coffee Video"
                      width={300}
                      height={237}
                      layout="responsive"
                    />
                  </figure> */}

                  {/* Video Play Button Start */}
                  {/* <div className="video-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      data-cursor-text="Play"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div> */}
                  {/* Video Play Button End */}
                </div>
              </div>

              {/* About Counter List Start */}
              <div className="about-counter-list">
                {counterItems.map((item, index) => (
                  <div key={index} className="about-counter-item">
                    <h2>
                      <span className="counter">{item.count}</span>
                      {item.suffix}
                    </h2>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              {/* About Counter List End */}
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  )
}
