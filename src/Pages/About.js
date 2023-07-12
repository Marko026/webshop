import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section className="about-hero">
        <div className="row container mx-auto justify-content-between align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="text-capitalize ">about us</h1>
            <p className="text-capitalize">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. .
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="./assets/img/about-hero.svg" alt="" />
          </div>
        </div>
      </section>


      <section className="services">
        <div className="services-title text-center mb-5">
          <h2 className="fw-lighter">Our Services</h2>
          <p className="fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="row container mx-auto pt-5">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-center"><i className="fa fa-truck fa-lg"></i></div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-center"><i className="fas fa-exchange-alt"></i></div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-center"><i className="fa fa-percent"></i></div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-center"><i className="fa fa-user"></i></div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>
        </div>
      </section>


      <section className="brands py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 mx-auto">
              <h2 className="fw-lighter">Our Brands</h2>
              <p className="fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_01.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_02.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_03.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_04.png" alt="Brand Logo" /></Link>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_01.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_02.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_03.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_04.png" alt="Brand Logo" /></Link>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_01.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_02.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_03.png" alt="Brand Logo" /></Link>
                          </div>
                          <div className="col-3 p-md-5">
                            <Link to="#"><img className="img-fluid brand-img" src="./assets/img/brand_04.png" alt="Brand Logo" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About