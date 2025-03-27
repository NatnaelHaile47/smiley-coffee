"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  useEffect(() => {
    console.log("jQuery Version:", window.jQuery ? $.fn.jquery : "jQuery not loaded");

    if (typeof window !== 'undefined') {
      const $ = window.jQuery;
      if ($ && $.fn.counterUp) {
        $(".counter").counterUp({ delay: 6, time: 3000 });
      } else {
        console.error("counterUp plugin is not available");
      }
    }
  }, []);

  const aboutFeatures = [
    "Global Coffee Sourcing",
    "Sustainable Farming",
    "Quality Certifications",
    "Direct Trade Partnerships",
    "Innovative Roasting Techniques",
    "Expert Logistics",
    "Customer-Centric Service",
    "Commitment to Excellence",
  ];

  const counterItems = [
    { count: 30, suffix: "+", text: "Years of Coffee Expertise" },
    { count: 500, suffix: "", text: "Varieties Sourced Worldwide" },
    { count: 100, suffix: "%", text: "Quality Assurance" },
    { count: 200, suffix: "K", text: "Cups Served" },
  ];

  return (
    <div className="about-us light-bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* About Us Images Start */}
            <div className="about-us-images">
              {/* Main Image */}
              <div className="about-us-image">
                <figure className="image-anime">
                  <Image src="/images/about_us.webp" alt="About Us" width={400} height={632} layout="responsive" />
                </figure>
              </div>
              {/* Circle Images */}
              <div className="about-us-circle-img-1">
                <figure className="image-anime">
                  <Image src="/images/coffee-circle-img-1.jpg" alt="Coffee Circle" width={160} height={160} />
                </figure>
              </div>
              <div className="about-us-circle-img-2">
                <figure className="image-anime">
                  <Image src="/images/coffee-circle-img-2.jpg" alt="Coffee Circle" width={160} height={160} />
                </figure>
              </div>
            </div>
            {/* About Us Images End */}
          </div>

          <div className="col-lg-7">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">About Us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Delivering Premium Coffee, <span>Worldwide</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our mission is to source and deliver the world's finest coffee, focusing on sustainability, quality, and direct trade partnerships. With decades of expertise, we bring exceptional coffee from diverse origins to enrich your daily experience.
                </p>
              </div>

              <div className="about-us-body">
                <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    {aboutFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="about-us-video-image wow fadeInUp" data-wow-delay="0.4s">
                  <figure className="image-anime">
                    <Image
                      src="/images/about-us-video-coffee.jpg"
                      alt="Coffee Video"
                      width={300}
                      height={237}
                      layout="responsive"
                    />
                  </figure>
                  {/* Video Play Button */}
                  <div className="video-play-button">
                    <Link href="https://www.youtube.com/watch?v=example" legacyBehavior>
                      <a className="popup-video" data-cursor-text="Play">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* About Counter List */}
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
  );
}
