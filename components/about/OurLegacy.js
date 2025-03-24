import Link from "next/link"
import Image from "next/image"

export default function OurLegacy() {
  const legacyItems = [
    {
      icon: "/images/icon-legacy-1.svg",
      title: "Global Sourcing",
      description: "We import and export the finest coffee beans from top farms worldwide, ensuring premium quality.",
      delay: 0,
    },
    {
      icon: "/images/icon-legacy-2.svg",
      title: "Ethical Trade",
      description: "Committed to fair trade and sustainable coffee farming, supporting both farmers and the environment.",
      delay: 0.2,
    },
    {
      icon: "/images/icon-legacy-3.svg",
      title: "Expert Processing",
      description: "Our skilled team ensures top-notch processing, roasting, and packaging for the best coffee experience.",
      delay: 0.4,
    },
    {
      icon: "/images/icon-legacy-4.svg",
      title: "Worldwide Distribution",
      description: "Efficient logistics and a strong supply chain ensure seamless delivery across international markets.",
      delay: 0.6,
    },
  ];
  
  

  return (
    <div className="our-legacy">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* Legacy Content Start */}
            <div className="legacy-content">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Our legacy</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Shaping excellence in <span>coffee trade</span>
                </h2>
                <p>
                  Preserving our legacy with premium coffee sourcing, ethical trade, and seamless global distribution—delivering quality in every cup.
                </p>

              </div>
              {/* Section Title End */}

              {/* Legacy Button Start */}
              <div className="legacy-button">
                <Link href="/contact" className="btn-default">
                  learn more
                </Link>
              </div>
              {/* Legacy Button End */}
            </div>
          </div>

          <div className="col-lg-6">
            {/* Legacy Item List Start */}
            <div className="legacy-item-list">
              {legacyItems.map((item, index) => (
                <div key={index} className="legacy-item wow fadeInUp" data-wow-delay={`${item.delay}s`}>
                  <div className="icon-box">
                    <Image src={item.icon || "/placeholder.svg"} alt={item.title} width={40} height={40} />
                  </div>
                  <div className="legacy-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Legacy Item List End */}
          </div>
        </div>
      </div>
    </div>
  )
}

