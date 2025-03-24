"use client"
import { useState } from "react"
import { Modal, Button } from "antd"
import Image from "next/image"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formError, setFormError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.fname || !formData.lname || !formData.email || !formData.phone) {
      setFormError("Please fill in all required fields")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address")
      return
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setModalContent({ title: "Success", message: "Message sent successfully!" })
      } else {
        setModalContent({ title: "Error", message: data.error || "Failed to send message." })
      }
    } catch (error) {
      setModalContent({ title: "Error", message: "Something went wrong." })
    }

    setIsModalOpen(true)
  }

  return (
    <div className="contact-form-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-us-box">
              <div className="contact-us-form">
                <div className="section-title">
                  <h2>
                    Partner with us for premium <span>coffee trade solutions!</span>
                  </h2>
                </div>

                <form id="contactForm" onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        placeholder="First name"
                        required
                        value={formData.fname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        placeholder="Last name"
                        required
                        value={formData.lname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone no."
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn-default">
                        <span>send message</span>
                      </button>
                      {formError && <div className="h4 text-danger mt-3">{formError}</div>}
                    </div>
                  </div>
                </form>
              </div>

              <div className="contact-us-image">
                <Image
                  src="/images/contact-us.webp"
                  alt="Contact Us"
                  width={650}
                  height={644}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AntD Modal */}
      <Modal title={modalContent.title} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <p>{modalContent.message}</p>
        <Button type="primary" onClick={() => setIsModalOpen(false)}>
          OK
        </Button>
      </Modal>
    </div>
  )
}
