"use client"
import { useState } from "react"
import Image from "next/image"

export default function OurFaqs() {
  const [activeAccordion, setActiveAccordion] = useState(1)

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const faqs = [
    {
      id: 1,
      question: "1. How do you source your coffee beans?",
      answer:
        "We partner with sustainable farms worldwide using direct trade practices to source premium coffee beans ethically.",
    },
    {
      id: 2,
      question: "2. What makes your coffee unique?",
      answer:
        "Our coffee is meticulously selected and roasted to perfection, preserving its unique flavor profile for a truly exceptional taste.",
    },
    {
      id: 3,
      question: "3. How do you ensure quality across the supply chain?",
      answer:
        "We implement rigorous quality control measures at every step—from the farm to the final cup—ensuring the highest standards are maintained.",
    },
    {
      id: 4,
      question: "4. What are your logistics and shipping practices?",
      answer:
        "We use efficient, reliable logistics solutions to ensure timely delivery of our coffee products across international markets.",
    },
    {
      id: 5,
      question: "5. Do you offer custom coffee blends?",
      answer:
        "Yes, we work closely with our clients to develop tailor-made coffee blends that cater to specific market needs and flavor profiles.",
    },
  ]

  return (
    <div className="our-faqs light-bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our FAQs Images Start */}
            <div className="our-faqs-images">
              {/* FAQ Image 1 */}
              <div className="faqs-img-1 animate-fade-in">
  <figure className="image-anime reveal">
    <Image src="/images/faq2.webp" alt="FAQs" width={500} height={757} layout="responsive" />
  </figure>
</div>
              {/* FAQ Image 2 */}
            </div>
            {/* Our FAQs Images End */}
          </div>

          <div className="col-lg-6">
            {/* Our FAQs Content Start */}
            <div className="our-faqs-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">frequently asked questions</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Find helpful answers to your <span>coffee trading concerns</span>
                </h2>
              </div>
              {/* Section Title End */}

              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="accordion">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${activeAccordion === faq.id ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    {activeAccordion === faq.id && (
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* FAQ Accordion End */}
            </div>
            {/* Our FAQs Content End */}
          </div>
        </div>
      </div>
    </div>
  )
}
