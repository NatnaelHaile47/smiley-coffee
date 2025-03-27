"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function CoffeeProducts() {
  const [activeTab, setActiveTab] = useState("roasted")

  const roastedCoffees = [
    {
      id: 1,
      name: "Jimma Roasted Coffee",
      description: "Full-bodied with earthy tones and a hint of spice. A bold coffee with low acidity.",
      image: "/images/banner.png",
      price: "$45.99",
      origin: "Jimma, Ethiopia",
      roastLevel: "Medium-Dark",
      weight: "1kg",
      process: "Natural"
    },
    {
      id: 2,
      name: "Jimma Roasted Coffee",
      description: "Full-bodied with earthy tones and a hint of spice. A bold coffee with low acidity.",
      image: "/images/banner.png",
      price: "$49.99",
      origin: "Jimma, Ethiopia",
      roastLevel: "Medium-Dark",
      weight: "2kg",
      process: "Natural"
    },
    {
      id: 3,
      name: "Jimma Roasted Coffee",
      description: "Full-bodied with earthy tones and a hint of spice. A bold coffee with low acidity.",
      image: "/images/banner.png",
      price: "$54.99",
      origin: "Jimma, Ethiopia",
      roastLevel: "Medium-Dark",
      weight: "3kg",
      process: "Natural"
    },
    {
      id: 4,
      name: "Yirgacheffe Roasted Coffee",
      description: "A bright, floral coffee with notes of jasmine and citrus. Perfect for those who enjoy a light, aromatic brew.",
      image: "/images/banner.png",
      price: "$39.99",
      origin: "Yirgacheffe, Ethiopia",
      roastLevel: "Light",
      weight: "1kg",
      process: "Washed"
    },
    {
      id: 5,
      name: "Yirgacheffe Roasted Coffee",
      description: "A bright, floral coffee with notes of jasmine and citrus. Perfect for those who enjoy a light, aromatic brew.",
      image: "/images/banner.png",
      price: "$44.99",
      origin: "Yirgacheffe, Ethiopia",
      roastLevel: "Light",
      weight: "2kg",
      process: "Washed"
    },
    {
      id: 6,
      name: "Bonga Roasted Coffee",
      description: "A rare and exotic coffee with floral and fruity notes. Bright acidity with a honey-like sweetness.",
      image: "/images/banner.png",
      price: "$49.99",
      origin: "Bonga, Ethiopia",
      roastLevel: "Light-Medium",
      weight: "5kg",
      process: "Honey"
    }
  ];
  
  const nonRoastedCoffees = [
    {
      id: 7,
      name: "Jimma Green Coffee Beans",
      description: "Bold and full-bodied green beans with a nutty and chocolatey character.",
      image: "/images/banner.png",
      price: "$35.99",
      origin: "Jimma, Ethiopia",
      moisture: "10.8%",
      weight: "1kg",
      grade: "Grade 2"
    },
    {
      id: 8,
      name: "Jimma Green Coffee Beans",
      description: "Bold and full-bodied green beans with a nutty and chocolatey character.",
      image: "/images/banner.png",
      price: "$39.99",
      origin: "Jimma, Ethiopia",
      moisture: "10.8%",
      weight: "2kg",
      grade: "Grade 2"
    },
    {
      id: 9,
      name: "Jimma Green Coffee Beans",
      description: "Bold and full-bodied green beans with a nutty and chocolatey character.",
      image: "/images/banner.png",
      price: "$44.99",
      origin: "Jimma, Ethiopia",
      moisture: "10.8%",
      weight: "3kg",
      grade: "Grade 2"
    },
    {
      id: 10,
      name: "Yirgacheffe Green Coffee Beans",
      description: "Premium green coffee beans from the birthplace of coffee. Perfect for home roasting.",
      image: "/images/banner.png",
      price: "$29.99",
      origin: "Yirgacheffe, Ethiopia",
      moisture: "10.5%",
      weight: "1kg",
      grade: "Grade 1"
    },
    {
      id: 11,
      name: "Yirgacheffe Green Coffee Beans",
      description: "Premium green coffee beans from the birthplace of coffee. Perfect for home roasting.",
      image: "/images/banner.png",
      price: "$34.99",
      origin: "Yirgacheffe, Ethiopia",
      moisture: "10.5%",
      weight: "2kg",
      grade: "Grade 1"
    },
    {
      id: 12,
      name: "Bonga Green Coffee Beans",
      description: "Exotic green beans from the Bonga forest, offering bright acidity and a honey-sweet aftertaste.",
      image: "/images/banner.png",
      price: "$41.99",
      origin: "Bonga, Ethiopia",
      moisture: "10.7%",
      weight: "2.5kg",
      grade: "Specialty"
    }
  ];
  
  

  const cardStyle = {
    background: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  }

  const contentStyle = {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div className="coffee-products light-bg-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Products</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Discover Our <span>Coffee Collection</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="tabs-wrapper text-center">
              <button
                className={`tab-btn ${activeTab === "roasted" ? "active" : ""}`}
                onClick={() => setActiveTab("roasted")}
                style={{
                  padding: '12px 30px',
                  margin: '0 10px',
                  border: 'none',
                  background: activeTab === "roasted" ? '#c8a97e' : '#f8f9fa',
                  color: activeTab === "roasted" ? '#fff' : '#333',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                Roasted Coffee
              </button>
              <button
                className={`tab-btn ${activeTab === "non-roasted" ? "active" : ""}`}
                onClick={() => setActiveTab("non-roasted")}
                style={{
                  padding: '12px 30px',
                  margin: '0 10px',
                  border: 'none',
                  background: activeTab === "non-roasted" ? '#c8a97e' : '#f8f9fa',
                  color: activeTab === "non-roasted" ? '#fff' : '#333',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                Green Coffee Beans
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {(activeTab === "roasted" ? roastedCoffees : nonRoastedCoffees).map((coffee) => (
            <div key={coffee.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="coffee-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={imageContainerStyle}>
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={contentStyle}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    marginBottom: '10px',
                    color: '#333',
                    fontWeight: '600'
                  }}>
                    {`${coffee.name} (${coffee.weight})`}
                  </h3>
                  <p style={{ 
                    color: '#666',
                    marginBottom: '15px',
                    flex: 1
                  }}>
                    {coffee.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto'
                  }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#c8a97e'
                    }}>
                      {coffee.price}
                    </span>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '14px',
                      color: '#666'
                    }}>
                      <span>{coffee.origin}</span>
                      {activeTab === "roasted" ? (
                        <>
                          <span>•</span>
                          <span>{coffee.roastLevel}</span>
                          <span>•</span>
                          <span>{coffee.process}</span>
                        </>
                      ) : (
                        <>
                          <span>•</span>
                          <span>{coffee.moisture}</span>
                          <span>•</span>
                          <span>{coffee.grade}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 