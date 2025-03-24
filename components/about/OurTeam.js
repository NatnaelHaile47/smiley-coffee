import Link from "next/link"
import Image from "next/image"

export default function OurTeam() {
  const teamMembers = [
    {
      image: "/images/user.jpg",
      name: "Arjun Khanna",
      position: "Technical Engineer",
      delay: 0,
    },
    {
      image: "/images/user.jpg",
      name: "Cameron Williamson",
      position: "Security Specialist",
      delay: 0.2,
    },
    {
      image: "/images/user.jpg",
      name: "Leslie Alexander",
      position: "Security Specialist",
      delay: 0.4,
    },
    {
      image: "/images/user.jpg",
      name: "Michael Johnson",
      position: "Support Manager",
      delay: 0.6,
    },
  ]

  return (
    <div className="our-team">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">our team</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Dedicated experts supporting <span>your journey</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay={`${member.delay}s`}>
                {/* Team Image Start */}
                <div className="team-image">
                  <Link href="/team-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={358}
                        layout="responsive"
                      />
                    </figure>
                  </Link>

                  {/* Team Social Icon Start */}
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3>
                    <Link href="/team-single">{member.name}</Link>
                  </h3>
                  <p>{member.position}</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

