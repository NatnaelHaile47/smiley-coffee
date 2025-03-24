import Link from "next/link";
import Image from "next/image";

export default function OurPassion() {
  return (
    <div className="our-passion">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* Passion Image Content Start */}
            <div className="passion-image-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">What fuels us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Passion for exceptional <span>coffee sourcing</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our dedication lies in sourcing the finest coffee beans, ensuring sustainable practices, and delivering 
                  Smiley coffee experiences worldwide.
                </p>
              </div>
              {/* Section Title End */}

              {/* Passion Image Start */}
              <div className="passion-image">
                <figure className="image-anime reveal">
                  <Image src="/images/our-approach.png" alt="Passion for Coffee" width={700} height={477} layout="responsive" />
                </figure>
              </div>
              {/* Passion Image End */}
            </div>
            {/* Passion Image Content End */}
          </div>

          <div className="col-lg-5">
            {/* Passion Image List Start */}
            <div className="passion-image-list">
              {/* Passion Image Start */}
              <div className="passion-image">
                <figure className="image-anime reveal">
                  <Image src="/images/our-approach2.avif" alt="Sustainable Coffee Farming" width={500} height={435} layout="responsive" />
                </figure>
              </div>
              {/* Passion Image End */}

              {/* Passion List Start */}
              <div className="passion-list wow fadeInUp" data-wow-delay="0.2s">
                <ul>
                  <li>Premium coffee beans sourced from ethical farms.</li>
                  <li>Commitment to sustainability and fair trade.</li>
                  <li>Expert roasting techniques for rich flavors.</li>
                  <li>Delivering the finest coffee to global markets.</li>
                </ul>
              </div>
              {/* Passion List End */}

              {/* Passion Button Start */}
              <div className="passion-button wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/contact" className="btn-default">
                  Get in Touch
                </Link>
              </div>
              {/* Passion Button End */}
            </div>
            {/* Passion Image List End */}
          </div>
        </div>
      </div>
    </div>
  );
}
