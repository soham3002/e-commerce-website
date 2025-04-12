import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to ShopSphere – your one-stop destination for all things shopping.
Explore a world where convenience meets quality, and every click brings you closer to the products you love. From everyday essentials to the latest trends, we’ve got you covered. Our mission is to make online shopping seamless, enjoyable, and tailored just for you.

Whether you’re browsing for the latest tech, updating your wardrobe, or finding the perfect gift, ShopSphere is designed to deliver a smooth experience. With trusted brands, secure checkout, and fast delivery, we aim to make your shopping journey easy and reliable.

At ShopSphere, we believe in more than just products — we believe in offering value, trust, and a community of satisfied customers. Discover something new. Find your favorites. Shop smart. ShopSphere.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://th.bing.com/th/id/OIP._HHKCILwKz4pOOSISaQekAHaE9?pid=ImgDet&w=152&h=101&c=7" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://th.bing.com/th/id/OIP.KTkiAvbSSY-vr_qFy5rZ_gHaE7?pid=ImgDet&w=174&h=116&c=7" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://th.bing.com/th/id/OIP.gCBhrO_45J41aOxpDTEFoQHaE8?pid=ImgDet&w=152&h=101&c=7" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://th.bing.com/th/id/OIP.K7vY3RtfEICHtkhfIlgEIAHaEO?pid=ImgDet&w=152&h=86&c=7" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage