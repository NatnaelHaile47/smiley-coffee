import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="hero dark-section parallaxie">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">
                  Bringing the world's finest coffee to your doorstep
                </h3>
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                Smiley Coffee Import & Export Solutions
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Experience unparalleled quality in every bean. We source premium coffee from sustainable farms worldwide and deliver exceptional blends to your business.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Button Start */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/contact" className="btn-default btn-highlighted">
                  Request a Quote
                </Link>
                <Link href="#coffee-products" className="hero-service-btn">
                  View Our Coffee Collections
                </Link>
              </div>
              {/* Hero Button End */}
            </div>
            {/* Hero Content End */}
          </div>

          <div className="col-lg-6">
            {/* Hero Image Start */}
            <div className="hero-image">
              <figure>
                {/* Uncomment and replace the src with a relevant coffee image */}
                <Image src="/images/banner.png" alt="Coffee Hero Image" width={500} height={700} layout="responsive" />
              </figure>
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </div>
    </div>
  );
}
