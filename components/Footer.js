import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* About Footer Start */}
            <div className="about-footer footer-links">
              <h3>About Coffee Exchange</h3>
              <p>
                We are dedicated to sourcing and delivering premium coffee with unmatched expertise.
                With years of experience in the coffee import/export industry, we connect quality beans to discerning customers worldwide.
              </p>
              <p>
                We pride ourselves on offering sustainable and tailored coffee solutions that elevate your business.
              </p>
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-2 col-md-3">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/about">About Company</Link>
                </li>
                <li>
                  <Link href="/services">Our Services</Link>
                </li>
                <li>
                  <Link href="/products">Our Products</Link>
                </li>
                <li>
                  <Link href="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-4">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link href="/projects-single">Premium Coffee</Link>
                </li>
                <li>
                  <Link href="/projects-single">Specialty Blends</Link>
                </li>
                <li>
                  <Link href="/projects-single">Sustainable Sourcing</Link>
                </li>
                <li>
                  <Link href="/projects-single">Organic Coffee</Link>
                </li>
                <li>
                  <Link href="/projects-single">Global Logistics</Link>
                </li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-5">
            <div className="footer-links">
              <h3>Contact Us</h3>
              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="tel:+11234567890">+1 123 456 7890</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="mailto:info@coffeeexchange.com">info@coffeeexchange.com</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}
            </div>
          </div>

          <div className="col-lg-12">
            {/* Footer Copyright Start */}
            <div className="footer-copyright">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Image src="/images/smily-coffee-logo.png" alt="Footer Logo" width={193} height={50} />
              </div>
              {/* Footer Logo End */}

              {/* Footer Social Links Start */}
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Links End */}

              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>
                  Copyright © {new Date().getFullYear()} All Rights Reserved.
                </p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
      </div>
    </footer>
  )
}
