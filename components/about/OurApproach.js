import Link from "next/link"
import Image from "next/image"

export default function OurApproach() {
  return (
    <div className="our-approach light-bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Approach Images Start */}
            <div className="approach-images">
              {/* Approach Image 1 Start */}
              <div className="approach-img-1">
                <figure className="image-anime reveal">
                  <Image src="/images/our-approach2.avif" alt="Coffee Approach" width={500} height={520} layout="responsive" />
                </figure>
              </div>
              {/* Approach Image 1 End */}

              {/* Approach Image Counter Start */}
              <div className="approach-image-counter">
                <div className="approach-img-2">
                  <figure className="image-anime">
                    <Image
                      src="/images/our-approach.png"
                      alt="Coffee Process"
                      width={430}
                      height={344}
                      layout="responsive"
                    />
                  </figure>
                </div>

                <div className="experience-box">
                  <div className="icon-box">
                    <Image src="/images/our-approach.png" alt="Coffee Experience" width={70} height={70} />
                  </div>
                  <div className="experience-content">
                    <h2>
                      <span className="counter">20</span>+
                    </h2>
                    <p>Years in Coffee Industry</p>
                  </div>
                </div>
              </div>
              {/* Approach Image Counter End */}
            </div>
            {/* Approach Images End */}
          </div>

          <div className="col-lg-6">
            {/* Approach Content Start */}
            <div className="approach-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our approach</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Sourcing the best, <span>brewing excellence</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  At the heart of our business lies a commitment to ethical sourcing, sustainability, and exceptional 
                  coffee quality. We work closely with farmers and partners worldwide to ensure that every bean tells a 
                  story of passion, craftsmanship, and responsibility.
                </p>
              </div>
              {/* Section Title End */}

              {/* Vision Mission Boxes Start */}
              <div className="vision-mission-boxes">
                {/* Vision Mission Item Start */}
                <div className="vision-mission-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="vision-mission-content">
                    <h3>Our vision</h3>
                    <p>Our vision is to redefine the global coffee trade through sustainable and fair practices.</p>
                  </div>
                  <div className="vision-mission-image">
                    <figure className="image-anime">
                      <Image src="/images/our-approach.png" alt="Coffee Vision" width={300} height={141} layout="responsive" />
                    </figure>
                  </div>
                </div>
                {/* Vision Mission Item End */}

                {/* Vision Mission Item Start */}
                <div className="vision-mission-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="vision-mission-content">
                    <h3>Our mission</h3>
                    <p>To bring premium coffee to the world while supporting local farmers and communities.</p>
                  </div>
                  <div className="vision-mission-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/our-approach2.avif"
                        alt="Coffee Mission"
                        width={300}
                        height={141}
                        layout="responsive"
                      />
                    </figure>
                  </div>
                </div>
                {/* Vision Mission Item End */}
              </div>
              {/* Vision Mission Boxes End */}

              {/* Approach List Start */}
              <div className="approach-list wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li>Partnering with ethical and sustainable coffee farms worldwide.</li>
                  <li>Ensuring high-quality beans through meticulous selection and roasting.</li>
                  <li>Delivering fresh and flavorful coffee directly from farm to cup.</li>
                </ul>
              </div>
              {/* Approach List End */}

              {/* Approach Button Start */}
              <div className="approach-button wow fadeInUp" data-wow-delay="0.8s">
                <Link href="/contact" className="btn-default">
                  Learn More
                </Link>
              </div>
              {/* Approach Button End */}
            </div>
            {/* Approach Content End */}
          </div>
        </div>
      </div>
    </div>
  )
}
