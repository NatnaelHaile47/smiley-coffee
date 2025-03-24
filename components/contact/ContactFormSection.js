"use client"
import { useState } from "react"
import Image from "next/image"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.fname || !formData.lname || !formData.email || !formData.phone) {
      setFormError("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address")
      return
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true)
    setFormError(null)
  }

  return (
    <div className="contact-form-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Contact Us Box Start */}
            <div className="contact-us-box">
              {/* Contact Us Form Start */}
              <div className="contact-us-form">
                {/* Section Title Start */}
                <div className="section-title">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Partner with us for premium <span>coffee trade solutions!</span>
                  </h2>
                </div>
                {/* Section Title End */}

                <form id="contactForm" onSubmit={handleSubmit} className="contact-form wow fadeInUp">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First name"
                        required
                        value={formData.fname}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last name"
                        required
                        value={formData.lname}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="E-mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone no."
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn-default">
                        <span>send message</span>
                      </button>
                      {formError && <div className="h4 text-danger mt-3">{formError}</div>}
                      {formSubmitted && <div className="h4 text-success mt-3">Message Sent Successfully!</div>}
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Us Form End */}

              {/* Contact Us Image Start */}
              <div className="contact-us-image">
                <figure className="image-anime">
                  <Image
                    src="/images/man_collecting_coffe.jpg"
                    alt="Contact Us"
                    width={650}
                    height={644}
                    layout="responsive"
                  />
                </figure>
              </div>
              {/* Contact Us Image End */}
            </div>
            {/* Contact Us Box End */}
          </div>
        </div>
      </div>
    </div>
  )
}

