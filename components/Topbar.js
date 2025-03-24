export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9">
            {/* Topbar Contact Information Start */}
            <div className="topbar-contact-info">
              <ul>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:info@domainname.com">info@domainname.com</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  6391 Elgin St. Celina, Delaware 10299
                </li>
              </ul>
            </div>
            {/* Topbar Contact Information End */}
          </div>

          <div className="col-md-3">
            {/* Topbar Social Links Start */}
            <div className="topbar-social-links">
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
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Topbar Social Links End */}
          </div>
        </div>
      </div>
    </div>
  )
}

