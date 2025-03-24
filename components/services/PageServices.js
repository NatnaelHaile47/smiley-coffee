import Link from "next/link"
import Image from "next/image"

export default function PageServices() {
  const services = [
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-1.svg",
      title: "Green Coffee Bean Sourcing",
      description: "We source premium-quality green coffee beans from top producers worldwide.",
      delay: 0,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-2.svg",
      title: "Roasted Coffee Export",
      description: "Exporting expertly roasted coffee to international markets with guaranteed freshness.",
      delay: 0.2,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-3.svg",
      title: "Private Label Coffee Solutions",
      description: "Customized coffee blends and packaging solutions for businesses and brands.",
      delay: 0.4,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-4.svg",
      title: "Bulk Coffee Trading",
      description: "Wholesale coffee supply for roasters, cafes, and distributors worldwide.",
      delay: 0.6,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-5.svg",
      title: "Specialty Coffee Distribution",
      description: "Delivering rare and high-grade specialty coffee to discerning customers.",
      delay: 0.8,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-6.svg",
      title: "Sustainable Coffee Farming",
      description: "Supporting eco-friendly coffee farming and fair trade practices.",
      delay: 1.0,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-7.svg",
      title: "Custom Coffee Blending",
      description: "Crafting unique coffee blends tailored to your market’s taste preferences.",
      delay: 1.2,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      icon: "/images/icon-service-item-8.svg",
      title: "Coffee Logistics & Export Compliance",
      description: "Handling all logistics and regulatory requirements for smooth coffee export.",
      delay: 1.4,
    },
  ];
  
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay={`${service.delay}s`}>
                {/* Service Image Start */}
                <div className="service-image">
                  <Link href="/service-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={195}
                        layout="responsive"
                      />
                    </figure>
                  </Link>
                </div>
                {/* Service Image End */}

                {/* Service Body Start */}
                <div className="service-body">
                  <div className="icon-box">
                    <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={40} height={40} />
                  </div>
                  <div className="service-content">
                    <h3>
                      <Link href="/service-single">{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-btn">
                    <Link href="/service-single" className="readmore-btn">
                      read More
                    </Link>
                  </div>
                </div>
                {/* Service Body End */}
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

