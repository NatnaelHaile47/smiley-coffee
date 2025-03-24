"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 600) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 110) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className="main-header">
      <div className={`header-sticky ${isSticky ? "active" : ""} ${isHidden ? "hide" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <Image src="/images/smily-coffee-logo.png" alt="Logo" width={150} height={90} />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className=" navbar-collapse main-menu" >
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className={`nav-item ${pathname === "/services" ? "active" : ""}`}>
                    <Link className="nav-link" href="/services">
                      Services
                    </Link>
                  </li>
                  <li className={`nav-item ${pathname === "/blog" ? "active" : ""}`}>
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li>
                  {/* <li className="nav-item submenu">
                    <Link className="nav-link" href="#">
                      Pages
                    </Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="/service-single">
                          Service Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/blog-single">
                          Blog Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/projects">
                          Projects
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/project-single">
                          Project Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/team">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/team-single">
                          Team Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/pricing">
                          Pricing Plan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/testimonials">
                          Testimonials
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/image-gallery">
                          Image Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/video-gallery">
                          Video Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/faqs">
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/404">
                          404
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>
                    <Link className="nav-link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <Link href="/contact" className="btn-default">
                  get a quote
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  )
}

