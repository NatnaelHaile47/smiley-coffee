import Link from "next/link"
import Image from "next/image"

export default function OurPricing() {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$99.00",
      features: [
        "Full-service pest control",
        "Detailed inspection",
        "Customized treatment plan",
        "Coverage for larger properties",
        "Priority emergency service.",
      ],
      highlighted: false,
      delay: 0,
    },
    {
      title: "Premium Plan",
      price: "$399.00",
      features: [
        "Full-service pest control",
        "Detailed inspection",
        "Customized treatment plan",
        "Coverage for larger properties",
        "Priority emergency service.",
      ],
      highlighted: true,
      delay: 0.2,
    },
    {
      title: "Standard Plan",
      price: "$199.00",
      features: [
        "Full-service pest control",
        "Detailed inspection",
        "Customized treatment plan",
        "Coverage for larger properties",
        "Priority emergency service.",
      ],
      highlighted: false,
      delay: 0.4,
    },
  ]

  const benefits = [
    {
      icon: "/images/icon-pricing-benefit-1.svg",
      text: "Get 30 day free trial",
    },
    {
      icon: "/images/icon-pricing-benefit-2.svg",
      text: "No any hidden fees pay",
    },
    {
      icon: "/images/icon-pricing-benefit-3.svg",
      text: "You can cancel anytime",
    },
  ]

  return (
    <div className="our-pricing">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">our pricing plan</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Quality pest control services at <span>competitive rates</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Pricing Item Start */}
              <div
                className={`pricing-item ${plan.highlighted ? "highlighted-box" : ""} wow fadeInUp`}
                data-wow-delay={`${plan.delay}s`}
              >
                {/* Pricing Header Start */}
                <div className="pricing-header">
                  <h3>{plan.title}</h3>
                  <h2>{plan.price}</h2>
                </div>
                {/* Pricing Header End */}

                {/* Pricing Body Start */}
                <div className="pricing-body">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {/* Pricing Body End */}

                {/* Pricing Button Start */}
                <div className="pricing-btn">
                  <Link href="/contact" className={`btn-default ${plan.highlighted ? "btn-highlighted" : ""}`}>
                    Get Started Now
                  </Link>
                </div>
                {/* Pricing Button End */}
              </div>
              {/* Pricing Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Pricing Benefit List Start */}
            <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.4s">
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.text} width={20} height={20} />
                    {benefit.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Pricing Benefit List End */}
          </div>
        </div>
      </div>
    </div>
  )
}

