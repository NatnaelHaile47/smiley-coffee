import Link from "next/link"
import Image from "next/image"

export default function CoffeeBlog() {
  const blogPosts = [
    {
      image: "/images/news1jpg.jpg",
      title: "Top Coffee Exporting Countries in 2025",
      delay: 0,
    },
    {
      image: "/images/news2.jpg",
      title: "How to Source High-Quality Coffee Beans for Your Business",
      delay: 0.2,
    },
    {
      image: "/images/news3.jpg",
      title: "Understanding Coffee Trade Regulations and Certifications",
      delay: 0.4,
    },
  ]

  return (
    <div className="coffee-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Latest Coffee Insights</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Stay updated with the latest <span>coffee trade trends</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay={`${post.delay}s`}>
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <Link href="/blog-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={240}
                        layout="responsive"
                      />
                    </figure>
                  </Link>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2>
                      <Link href="/blog-single">{post.title}</Link>
                    </h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Blog Item Button Start */}
                  <div className="post-item-btn">
                    <Link href="/blog-single" className="readmore-btn">
                      Read More
                    </Link>
                  </div>
                  {/* Blog Item Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
