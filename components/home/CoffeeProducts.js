"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function CoffeeProducts() {
  const [activeTab, setActiveTab] = useState("roasted")

  const roastedCoffees = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      description: "A bright, floral coffee with notes of jasmine and citrus. Perfect for those who enjoy a light, aromatic brew.",
      image: "/images/banner.png",
      price: "$24.99",
      origin: "Ethiopia",
      roastLevel: "Light",
      weight: "250g",
      process: "Washed"
    },
    {
      id: 2,
      name: "Colombian Supremo",
      description: "Rich and balanced with notes of caramel and nuts. A classic coffee that never disappoints.",
      image: "/images/banner.png",
      price: "$22.99",
      origin: "Colombia",
      roastLevel: "Medium",
      weight: "250g",
      process: "Washed"
    },
    {
      id: 3,
      name: "Kenya AA",
      description: "Complex and winey with blackberry and grape notes. A premium coffee for the discerning palate.",
      image: "/images/banner.png",
      price: "$29.99",
      origin: "Kenya",
      roastLevel: "Medium-Dark",
      weight: "250g",
      process: "Washed"
    },
    {
      id: 4,
      name: "Guatemala Antigua",
      description: "Smooth and chocolatey with hints of apple and spice. A crowd-pleasing coffee with depth.",
      image: "/images/banner.png",
      price: "$26.99",
      origin: "Guatemala",
      roastLevel: "Medium",
      weight: "250g",
      process: "Washed"
    },
    {
      id: 5,
      name: "Sumatra Mandheling",
      description: "Full-bodied with earthy notes and low acidity. Perfect for those who prefer a bold, rich coffee.",
      image: "/images/banner.png",
      price: "$23.99",
      origin: "Indonesia",
      roastLevel: "Dark",
      weight: "250g",
      process: "Wet-Hulled"
    },
    {
      id: 6,
      name: "Costa Rica Tarrazu",
      description: "Clean and bright with notes of honey and orange. A well-balanced coffee with great complexity.",
      image: "/images/banner.png",
      price: "$25.99",
      origin: "Costa Rica",
      roastLevel: "Medium",
      weight: "250g",
      process: "Honey"
    }
  ]

  const nonRoastedCoffees = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe Green",
      description: "Premium green coffee beans from the birthplace of coffee. Perfect for home roasting.",
      image: "/images/banner.png",
      price: "$19.99",
      origin: "Ethiopia",
      moisture: "10.5%",
      weight: "1kg",
      grade: "Grade 1"
    },
    {
      id: 2,
      name: "Colombian Excelso Green",
      description: "High-quality green beans with excellent potential for roasting. Well-balanced and versatile.",
      image: "/images/banner.png",
      price: "$18.99",
      origin: "Colombia",
      moisture: "11%",
      weight: "1kg",
      grade: "Excelso"
    },
    {
      id: 3,
      name: "Kenya AA Green",
      description: "Premium green beans with exceptional quality. Known for their complex flavor potential.",
      image: "/images/banner.png",
      price: "$24.99",
      origin: "Kenya",
      moisture: "10.8%",
      weight: "1kg",
      grade: "AA"
    },
    {
      id: 4,
      name: "Guatemala SHB Green",
      description: "Strictly Hard Bean green coffee with excellent density and flavor potential.",
      image: "/images/banner.png",
      price: "$21.99",
      origin: "Guatemala",
      moisture: "11.2%",
      weight: "1kg",
      grade: "SHB"
    },
    {
      id: 5,
      name: "Sumatra Mandheling Green",
      description: "Green beans with unique characteristics. Perfect for those who enjoy earthy, full-bodied coffee.",
      image: "/images/banner.png",
      price: "$20.99",
      origin: "Indonesia",
      moisture: "11.5%",
      weight: "1kg",
      grade: "Grade 1"
    },
    {
      id: 6,
      name: "Costa Rica SHB Green",
      description: "High-altitude green beans with excellent potential for complex flavors.",
      image: "/images/banner.png",
      price: "$22.99",
      origin: "Costa Rica",
      moisture: "10.7%",
      weight: "1kg",
      grade: "SHB"
    }
  ]

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
                    {coffee.name}
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