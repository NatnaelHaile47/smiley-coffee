import Link from "next/link";
import Image from "next/image";

export default function BestServices() {
  const services = [
    { icon: "/images/icon-best-service-1.svg", title: "Global Coffee Sourcing", delay: 0 },
    { icon: "/images/icon-best-service-2.svg", title: "Quality & Sustainability", delay: 0.2 },
    { icon: "/images/icon-best-service-3.svg", title: "Efficient Logistics", delay: 0.4 },
    { icon: "/images/icon-best-service-4.svg", title: "Expert Consultancy", delay: 0.6 },
  ];

  return (
    <div className="best-services">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="best-services-box">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="best-service-item wow fadeInUp"
                  data-wow-delay={`${service.delay}s`}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                    padding: "20px",
                    borderRadius: "5px",
                    marginBottom: "20px"
                  }}
                >
                  <div className="icon-box">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="best-service-item-content">
                    <h3>{service.title}</h3>
                    <Link href="/contact" className="readmore-btn">
                      read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
