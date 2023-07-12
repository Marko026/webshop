import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {

  const cart = useSelector(state => state.cart)

  return (
    <div>
      <section className="top-info py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <i className="fas fa-envelope me-2"></i>
            <Link to="">info@company.com</Link>
            <i className="fas fa-phone ms-2 me-2"></i>
            <Link to="">+381 11 123 456</Link>
          </div>
          <div>
            <Link to=""><i className="fab fa-facebook-f me-3"></i></Link>
            <Link to=""><i className="fab fa-instagram me-3"></i></Link>
            <i className="fab fa-linkedin me-3"></i>
            <Link to=""><i className="fab fa-twitter"></i></Link>
          </div>
        </div>
      </section>
      <header>
        <nav className="navbar container navbar-expand-lg bg-white">
          <div className="container-fluid">
            <Link className="navbar-brand fs-1" to="/">WebShop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-center text-lg-start">
                <li className="nav-item">
                  <Link className="nav-link active text-capitalize fs-4 fw-light" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-capitalize fs-4 fw-light" to="about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-capitalize fs-4 fw-light" to="shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-capitalize fs-4 fw-light" to="contact"> Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-capitalize fs-4 fw-light" to="admin">Admin</Link>
                </li>
                <li className="nav-item d-flex justify-content-center ms-0 ms-lg-5 position-relative ">
                  <Link className="fs-2   align-self-center fa fa-shopping-cart  " to="cart"></Link>
                  <span className='fs-6 number position-absolute'>{cart.length}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar