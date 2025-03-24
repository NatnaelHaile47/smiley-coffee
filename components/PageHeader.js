import Link from "next/link"

export default function PageHeader({ title }) {
  return (
    <div className="page-header parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                </ol>
              </nav>
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  )
}

