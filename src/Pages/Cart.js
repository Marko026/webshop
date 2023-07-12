import React from 'react'
import { useNavigate } from 'react-router-dom'
import { remove } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { emptyCart } from '../redux/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import uuid4 from 'uuid4';


const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const goToShop = () => {
    navigate('/shop')
  }
  const deleteItem = (cartProduct) => {
    dispatch(remove(cartProduct))
  }

  const notify = () => {
    toast.success("Thank you for your order! ")

    setTimeout(() => {
      dispatch(emptyCart())
    }, 2000)

  }

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  const roundedPrice = totalPrice.toFixed(2)







  return (
    <div>
      <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
          <div className="col-lg-8">
            <div className="product-details p-2 me-22">
              <div className="cart-shop d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ms-2 back-to-shop" onClick={goToShop}>Continue Shopping</span></div>
              <hr />
              <h6 className="mb-0 ">Shopping cart</h6>
              <div className="d-flex justify-content-between">

              </div>
              {cart.length === 0 ? <h1 className="text-center">Cart is empty</h1> :
                cart.map((cartProduct, idx) => {
                  return (
                    <div key={uuid4()} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                      <div className="d-flex  flex-column flex-md-row">
                        <img className="cart-img rounded me-4 mb-2 mb-md-0" src={cartProduct.image} width="40" alt="" onClick={goToShop} />
                        <div className="me-2"><span className="fs-6 fw-bold d-block fw-bold">{cartProduct.title}</span><span className="spec">{cartProduct.category}</span></div>
                      </div>
                      <div className="d-flex flex-column  ">
                        <span className="d-block d-flex align-items-center justify-content-end ml-5 fw-bold">${cartProduct.price}<i onClick={() => deleteItem(cartProduct)} className="fa fa-trash-o ms-3 text-danger"></i></span>
                        <div className="price d-flex justify-content-center">
                          <span className="fs-4 me-2 text-success">qty:
                          </span>
                          <span className="fs-4 text-muted ">
                            {cartProduct.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
          <div className="col-lg-4">
            <div className="payment-info p-4 rounded-5 fw-bold ">
              <div className="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="./assets/img/shop_07.jpg" width="30" alt='' /></div>
              <span className="type d-block mt-3 mb-1">Card type</span
              ><label className="radio">
                <input type="radio" name="card" value="payment" defaultChecked /> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" alt='' /></span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" alt='' /></span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" alt='' /></span>
              </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" alt='' /></span>
              </label>
              <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
              <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
              <div className="row">
                <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
                <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
              </div>
              <hr className="line" />
              <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>${totalPrice}</span></div>
              <div onClick={notify} className="btn cart-button btn-block  mt-3 " type="button">
                <ToastContainer position='top-right' autoClose="3000" theme="dark" />
                <span>${roundedPrice}</span><span className="ms-2">Checkout<i className="fa fa-long-arrow-right ms-2"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart