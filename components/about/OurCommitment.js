import Image from "next/image"

export default function OurCommitment() {
  return (
    <div className="our-commitment dark-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Commitment Content Start */}
            <div className="commitment-content">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">our commitment</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Dedicated to <span>sustainable coffee sourcing</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We are committed to ethical sourcing, fair trade, and delivering the highest-quality coffee while 
                  supporting farming communities worldwide.
                </p>
              </div>
              {/* Section Title End */}

              {/* Commitment List Start */}
              <div className="commitment-list">
                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="90%">
                    <div className="skill-data">
                      <div className="skill-title">Sustainable sourcing</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>

                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="85%">
                    <div className="skill-data">
                      <div className="skill-title">Fair trade partnerships</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
              </div>
              {/* Commitment List End */}
            </div>
            {/* Commitment Content End */}
          </div>

          <div className="col-lg-6">
            {/* Commitment Images Start */}
            <div className="commitment-images">
              {/* Commitment Image Start */}
              <div className="commitment-img">
                <figure>
                  <Image
                    src="/images/commitment-coffee.png"
                    alt="Coffee Commitment"
                    width={500}
                    height={592}
                    layout="responsive"
                  />
                </figure>
              </div>
              {/* Commitment Image End */}

              {/* Contact Us Circle Start */}
              <div className="contact-us-circle">
                <a href="/contact">
                  <Image src="/images/contact-us-circle.svg" alt="Contact Us" width={126} height={126} />
                </a>
              </div>
              {/* Contact Us Circle End */}

              {/* Experience Counter Box Start */}
              <div className="experience-counter-box">
                <h2>
                  <span className="counter">20</span>+
                </h2>
                <p>Years in the coffee industry</p>
              </div>
              {/* Experience Counter Box End */}
            </div>
            {/* Commitment Images End */}
          </div>
        </div>
      </div>
    </div>
  )
}
