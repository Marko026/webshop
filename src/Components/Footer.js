import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="row container m-auto text-center text-md-start">
        <div className="col-md-4 footer-item">
          <h3>WebShop</h3>
          <hr />
          <div className="contact-details mb-2">
            <i className="fa-sharp fa-solid fa-location-dot me-2"></i>
            <Link to="">info@company.com</Link>
          </div>
          <div className="contact-details mb-2">
            <i className="fas fa-phone me-2"></i>
            <Link to="">info@company.com</Link>
          </div>
          <div className="contact-details">
            <i className="fas fa-envelope me-2"></i>
            <Link to="">info@company.com</Link>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Products</h3>
          <hr />
          <ul>
            <li>
              <Link to="">Luxury</Link>
            </li>
            <li>
              <Link to="">Sport Wear</Link>
            </li>
            <li>
              <Link to="">Men's Shoes</Link>
            </li>
            <li>
              <Link to="">Women's Shoes</Link>
            </li>
            <li>
              <Link to="">Popular Dress</Link>
            </li>
            <li>
              <Link to="">Gym Accessories</Link>
            </li>
            <li>
              <Link to="">Sport Shoes</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Further Info</h3>
          <hr />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About us</Link>
            </li>
            <li>
              <Link to="shop">Shop Locations</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="footer-social container d-flex flex-column text-center text-md-start flex-md-row  justify-content-between py-4">
        <div className="social">
          <Link className="border rounded-pill m-auto px-3 py-2 me-3" href=""><i className="fab fa-facebook-f"></i></Link>
          <Link to="" className="border rounded-pill m-auto px-3 py-2 me-3"><i className="fab fa-instagram"></i></Link>
          <Link to="" className="border rounded-pill m-auto px-3 py-2 me-3"><i className="fab fa-linkedin"></i></Link>

          <Link to="" className="border rounded-pill m-auto px-3 py-2 me-3"><i className="fab fa-twitter"></i></Link>
        </div>
        <div className="subscribe mt-4 mt-md-0">
          <form action="">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button className="input-group-text" id="basic-addon2">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
      <p className="copyright container-fluid bg-dark mb-0 py-4 text-white text-center">Copyright © 2023 | Marko Todorovic</p>
    </footer>
  )
}

export default Footer