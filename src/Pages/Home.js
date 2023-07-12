import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StarRating } from "../utils/starRating"
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../redux/productSlice'
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

  const { data: products } = useSelector(state => state.products)
  const [loading, setLoading] = useState(true)



  const dispatch = useDispatch()
  const navigate = useNavigate()


  const fetchApi = async () => {
    setLoading(true)
    dispatch(getProducts(products))
    setLoading(false)
  }


  useEffect(() => {
    fetchApi()
  }, [])


  let sliceProducts = [...products]
  sliceProducts = sliceProducts.slice(0, 3)


  let randomCategory = [...products]
  randomCategory = randomCategory.sort(() => Math.random() * 10 - Math.random()).slice(0, 3)










  const goToShopPage = () => {
    navigate('/shop')
  }


  return (
    <>
      <section className="hero">
        <div className="row">
          <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row flex-column flex-md-row align-items-center justify-content-center ">
                    <div className="hero-content">
                      <h1 className='text-center text-md-start'><span className="fw-bold">WebShop</span> eCommerce</h1>
                      <h2 className="fw-lighter text-center text-md-start">Experience seamless shopping with our user-friendly interface.</h2>
                      <p className="fw-normal text-center text-md-start">
                        "Welcome to our online store, where you'll find Link  wide selection of products to meet all your shopping needs where shopping becomes an enjoyable and
                        effortless experience."
                      </p>
                    </div>
                    <div className="hero-img">
                      <img className="img-fluid" src="./assets/img/banner_img_01.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row flex-column flex-md-row align-items-center justify-content-center">
                    <div className="hero-content">
                      <h1 className="text-muted text-center text-md-start">Experience seamless shopping with our user-friendly interface.</h1>
                      <h2 className='text-center text-md-start'>Upgrade your home with our top-notch appliances..</h2>
                      <p className="fw-normal text-center text-md-start">"Step into Link  world of convenience and endless possibilities, where shopping becomes an enjoyable and effortless experience."</p>
                    </div>
                    <div className="hero-img">
                      <img className="img-fluid" src="./assets/img/banner_img_02.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row flex-column flex-md-row align-items-center justify-content-center">
                    <div className="hero-content">
                      <h1 className="text-muted text-center text-md-start">Explore, shop, and indulge in Link  world of online shopping.</h1>
                      <h2 className='text-center text-md-start'>Experience seamless shopping with our user-friendly interface.</h2>
                      <p className="fw-normal text-center text-md-start">"Immerse yourself in Link  vibrant world of color with our stunning collection of products that will brighten up your life."</p>
                    </div>
                    <div className="hero-img">
                      <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="categories px-md-5 px-lg-0">
        <div className="categ-title text-center">
          <h2 className="fw-lighter">Categories of The Month</h2>
          <p className="fw-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="container">
          <div className="row categ-items text-center ">
            {randomCategory.map((randomC) => (
              <div key={uuidv4()} className="col-md-4 d-flex flex-column justify-content-between align-items-center">
                <div className='categ-item d-flex  flex-column justify-content-center align-items-center'>
                  <img src={randomC.image} className="card-img-top rounded-1  w-75" alt="..." loading='lazy' />
                  <Link className="px-3 py-2 rounded-2 mt-3 d-inline-block " to="" onClick={() => navigate('/shop')}  >Go Shop</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products">
        <div className="product-title p-0 p-md-5 text-center">
          <h2 className="fw-lighter">Categories of The Month</h2>
          <p className="fw-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="container">
          <div className="row">
            {loading ? `Loading...` :
              products && sliceProducts.map((sliceProd, idx) => (
                <div key={uuidv4()} className=" col-md-4 mb-4 mb-md-0 d-flex flex-column " onClick={goToShopPage}>
                  <article className='product-items bg-white rounded-5 '>
                    <div className="prod-img  d-flex justify-content-center align-items-center flex-grow-1">
                      <img src={sliceProd.image} alt="" />
                    </div>
                    <div className="product-content p-4 flex-grow-1">
                      <div className="stars-zone d-flex justify-content-between">
                        <div>
                          <StarRating
                            rating={sliceProd.rating.rate}
                          />
                        </div>
                        <p className="price">${sliceProd.price}</p>
                      </div>
                      <h3 className="fw-light" style={{ overflow: "hidden", height: "70px" }} >{sliceProd.title}</h3>
                      <p className="fw-light" style={{ overflow: 'hidden', height: "100px" }} >{sliceProd.description} </p>
                      <div className="reviews d-flex flex-column flex-lg-row ">
                        <p className="me-3 mt-1 opacity-50">Category:</p>
                        <span className="reviews text-muted ">{sliceProd.category}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section >
    </>
  )
}

export default Home