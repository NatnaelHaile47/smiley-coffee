import Image from "next/image"

export default function PageContactUs() {
  const contactInfo = [
    {
      icon: "/images/icon-mail.svg",
      title: "Email address",
      content: [
        { text: "info@domainname.com", link: "mailto:info@domainname.com" },
        { text: "support@domainname.com", link: "mailto:support@domainname.com" },
      ],
      delay: 0,
    },
    {
      icon: "/images/icon-phone.svg",
      title: "Contact Us",
      content: [
        { text: "+251 923 456 789", link: "tel:+25191123456789" },
        { text: "+251 923 456 987", link: "tel:+25191123456987" },
      ],
      delay: 0.2,
    },
    {
      icon: "/images/icon-location.svg",
      title: "location",
      content: [{ text: "Bole rwanda Road, Addis Abeba, Ethiopia", link: null }],
      delay: 0.4,
    },
    {
      icon: "/images/icon-clock.svg",
      title: "Working Hours",
      content: [
        { text: "Mon - Sat :- 7:00 to 5:00", link: null },
        { text: "Sunday :- Close", link: null },
      ],
      delay: 0.6,
    },
  ]

  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Contact Info Box Start */}
            <div className="contact-info-box">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item wow fadeInUp" data-wow-delay={`${info.delay}s`}>
                  <div className="icon-box">
                    <Image src={info.icon || "/placeholder.svg"} alt={info.title} width={40} height={40} />
                  </div>
                  <div className="contact-info-content">
                    <h3>{info.title}</h3>
                    {info.content.map((item, idx) => (
                      <p key={idx}>{item.link ? <a href={item.link}>{item.text}</a> : item.text}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Contact Info Box End */}
          </div>
        </div>
      </div>
    </div>
  )
}

