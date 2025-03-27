import Link from "next/link";
import Image from "next/image";

export default function BestServices() {
  const services = [
    { icon: "/images/best-service.svg", title: "Global Coffee Sourcing", delay: 0 },
    { icon: "/images/best-service.svg", title: "Quality & Sustainability", delay: 0.2 },
    { icon: "/images/best-service.svg", title: "Efficient Logistics", delay: 0.4 },
    { icon: "/images/best-service.svg", title: "Expert Consultancy", delay: 0.6 },
  ];

  return (
    <div className="best-services" style={{ 
      paddingLeft: "30px", 
      paddingRight: "30px", 
      backgroundColor: "transparent",
      position: "relative", // Keeps it inside the normal flow
      zIndex: 10, // Higher value ensures it's on top
      marginTop: "-50px" // Moves it up
    }}>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12" >
            <div className="best-services-box">
              {services.map((service, index) => (
                <div
                key={index}
                className="best-service-item wow fadeInUp"
                data-wow-delay={`${service.delay}s`}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
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
                    {/* <Link href="/contact" className="readmore-btn">
                      read more
                    </Link> */}
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
