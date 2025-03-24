import Link from "next/link"
import Image from "next/image"

export default function PageBlog() {
  const blogPosts = [
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Top Coffee Exporting Countries in 2025",
      delay: 0,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "How to Source High-Quality Coffee Beans for Your Business",
      delay: 0.2,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Understanding Coffee Trade Regulations and Certifications",
      delay: 0.4,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "The Impact of Climate Change on Coffee Production",
      delay: 0.6,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "Coffee Pricing Trends: What to Expect in 2025",
      delay: 0.8,
    },
    {
      image: "/images/man_collecting_coffe.jpg",
      title: "From Farm to Cup: The Journey of Coffee Beans",
      delay: 1.0,
    },
  ]
  

  return (
    <div className="page-blog">
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay={`${post.delay}s`}>
                {/* Post Featured Image Start*/}
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
                      read more
                    </Link>
                  </div>
                  {/* Blog Item Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Page Pagination Start */}
            <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
              <ul className="pagination">
                <li>
                  <a href="#">
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Page Pagination End */}
          </div>
        </div>
      </div>
    </div>
  )
}

