import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/admin'
import { useNavigate } from 'react-router-dom'
import { StarRating } from '../utils/starRating'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'
import { sortProducts, sortProductsRating } from '../redux/admin'


const Shop = () => {
  const { data: products } = useSelector(state => state.dashboard)
  const [newProductArray, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sortByPrice = useRef()
  const sortByRating = useRef()

  useEffect(() => {
    setLoading(true)
    dispatch(getProducts())
    setLoading(false)
  }, [])

  useEffect(() => {
    let newProduct = [...products]
    setProduct(newProduct)
  }, [])

  const sortProduct = () => {
    if (sortByPrice.current.selected) {
      dispatch(sortProducts(
        newProductArray.sort((a, b) => a.price - b.price)
      ))
    } else if (sortByRating.current.selected) {
      dispatch(sortProductsRating(
        newProductArray.sort((a, b) => b.rating.rate - a.rating.rate)
      ))
    } else {
      dispatch(getProducts(newProductArray))
    }

  }





  const goToDetailsPage = (id) => {
    navigate(`/details/${id}`)
  }
  return (
    <div>
      <section className="product-section">
        <select className="form-select container m-auto py-2 my-5 w-50" aria-label="Default select example" onClick={() => sortProduct()} >
          <option value="search...">Search by</option>
          <option ref={sortByPrice} value="sortByPrice">Price range</option>
          <option ref={sortByRating} value="sortRating">By Rating</option>
        </select>
        <div className="row container m-auto pb-5">
          {
            loading ? <h1 className='text-center'>Loading...</h1>
              :
              newProductArray.map((product, index) => (
                <div className="product-items col-md-6 col-lg-4 mb-5 position-relative" key={uuidv4()}>
                  <article className="shadow rounded-2 d-flex flex-column align-items-center justify-content-between">
                    <img className=" mb-3" src={product.image} alt="" />
                    <div className="product-conent text-center px-4 ">
                      <div className="product-title text-center ms-3">
                        <h5 className="m-0 fw-light mb-3" style={{ overflow: "hidden", height: "50px" }}>{product.title}</h5>
                      </div>
                      <div className='mb-2'>
                        <StarRating rating={product.rating.rate} />
                      </div>
                      <p className="pb-3">${product.price}</p>
                    </div>
                    <div className="add-product position-absolute">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="far fa-eye " onClick={() => goToDetailsPage(product.id)}></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              ))
          }
        </div>
      </section >
    </div >
  )
}
export default Shop