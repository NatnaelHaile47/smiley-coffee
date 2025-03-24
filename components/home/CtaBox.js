import Link from "next/link"
import Image from "next/image"

export default function CtaBox() {
  return (
    <div className="cta-box dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 order-md-1 order-2">
            {/* CTA Box Image Start */}
            <div className="cta-box-image">
              <Image src="/images/cta-box-image.png" alt="CTA Box" width={600} height={586} layout="responsive" />
            </div>
            {/* CTA Box Image End */}
          </div>

          <div className="col-lg-5 col-md-6 order-md-2 corder-1">
            {/* CTA Box Content Start */}
            <div className="cta-box-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Let's talk about your <span>pest control needs</span>
                </h2>
              </div>
              {/* Section Title End */}

              {/* Cta Box Body Start */}
              <div className="cta-box-body wow fadeInUp">
                <ul>
                  <li>Schedule Your Free Inspection</li>
                  <li>Prevent Future Infestations</li>
                  <li>Simple and Fast Booking</li>
                </ul>
              </div>
              {/* Cta Box Body End */}

              {/* Cta Button Start */}
              <div className="cta-btn wow fadeInUp" data-wow-delay="0.2s">
                <Link href="/contact" className="btn-default btn-highlighted">
                  Get Membership
                </Link>
              </div>
              {/* Cta Button End */}
            </div>
            {/* CTA Box Content End */}
          </div>
        </div>
      </div>
    </div>
  )
}

