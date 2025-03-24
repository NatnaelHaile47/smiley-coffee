import Link from "next/link"
import Image from "next/image"

export default function WhyChooseUs() {
  const whyChooseItems = [
    {
      icon: "/images/icon-why-choose-1.svg",
      title: "Global Coffee Sourcing",
      description: "We partner with sustainable farms worldwide to bring you the finest coffee beans.",
      delay: 0,
    },
    {
      icon: "/images/icon-why-choose-1.svg",
      title: "Customized Coffee Blends",
      description: "Tailor-made blends crafted to suit your unique taste preferences.",
      delay: 0.2,
    },
    {
      icon: "/images/icon-why-choose-1.svg",
      title: "Certified Coffee Specialists",
      description: "Our experts ensure quality from bean to brew with strict certifications.",
      delay: 0.4,
    },
  ]

  return (
    <div className="why-choose-us light-bg-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Why Choose Us</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Your Trusted Partner for <span>Smiley Coffee Trading</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Our commitment to excellence, sustainable sourcing, and expert processing ensures you receive the best coffee from around the world.
              </p>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Why Choose Box Start */}
            <div className="why-choose-box">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="why-choose-item wow fadeInUp" data-wow-delay={`${item.delay}s`}>
                  <div className="icon-box">
                    <Image src={item.icon || "/placeholder.svg"} alt={item.title} width={40} height={40} />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Page Cta Box Start */}
              <div className="page-cta-box wow fadeInUp" data-wow-delay="0.6s">
                {/* Page Cta Box Info Start */}
                <div className="page-cta-box-info">
                  <h3>Elevate Your Coffee Experience Today!</h3>
                </div>
                {/* Page Cta Box Info End */}

                {/* Cta Contact Box Start */}
                <div className="cta-contact-box">
                  <p>Call Now</p>
                  <div className="cta-contact-item">
                    <div className="icon-box">
                      <Image src="/images/icon-cta-phone.svg" alt="Phone" width={16} height={16} />
                    </div>
                    <div className="cta-contact-item-content">
                      <h3>
                        <a href="tel:+2515551234567">+251 555-123-4567</a>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Cta Contact Box End */}
              </div>
              {/* Page Cta Box End */}
            </div>
            {/* Why Choose Box End */}
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
