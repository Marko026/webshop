import React from 'react'
import { StarRating } from '../utils/starRating'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/admin'
import { addCart } from '../redux/cartSlice'

const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: products } = useSelector(state => state.dashboard)

  useEffect(() => {
    dispatch(getProducts(products))
  }, [])


  const product = products.find(product => product.id === Number(id))



  const backToShop = () => {
    navigate('/shop')
  }

  let quantity = []
  for (let i = 1; i <= product.rating.count; i++) {
    quantity.push(<option key={i} value={i}>{i}</option>)
  }

  const addToCart = (e) => {
    e.preventDefault()
    const qty = e.target.qty.value
    dispatch(addCart({ ...product, quantity: Number(qty) }))
  }

  return (
    <div>
      <section className="details py-5 py-lg-0">
        <div className="row container flex-column flex-xll-column-reverse    flex-md-row m-auto py-md-5 justify-content-between">
          <div className="detail-items col-md-6 bg-white p-0 p-lg-5 shadow p-0">
            <img className="img-fluid d-block w-75 m-auto " src={product.image} alt="" />
          </div>
          <div className="detail-items text-center text-md-start col-12 col-md-6 shadow bg-white p-3 d-flex flex-column justify-content-evenly">
            <div className="title">
              <h3 className='mb-2 mb-lg-4 fw-bold'>{product.title}</h3>
              <p className=" my-2 my-lg-0">Price: <span className='fw-bold'>${product.price}</span></p>
            </div>
            <div className="rating">
              <StarRating rating={product.rating.rate} />
            </div>
            <div className="description">
              <h4>Description:</h4>
              <p className="mb-0">
                {product.description}
              </p>
            </div>
            <div className="category">
              <h4>Category: <span className="text-muted">{product.category}</span></h4>
            </div>
            <form onSubmit={addToCart} className="quantity d-flex flex-column flex-lg-row align-items-center">
              <h4 className="me-3">Quantity:</h4>
              <select name='qty' className="form-control w-25 me-3 mb-2 mb-lg-0 text-center " type="number" defaultValue="" >
                {quantity}
              </select>
              <button className="btn mb-2 mb-lg-0 " type='submit'>Add to Cart</button>
              <button className="btn  ms-lg-3" onClick={backToShop}>Back to Shop</button>
            </form>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Details