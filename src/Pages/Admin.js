import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addNewProduct, deleteOneProduct, updateProduct } from '../redux/admin'
import { getProducts } from '../redux/admin'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Admin = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [hidden, setHidden] = useState(true)




  const dispatch = useDispatch()
  const { data: products } = useSelector(state => state.dashboard)


  useEffect(() => {
    dispatch(getProducts(products))
  }, [])

  const addProduct = (e) => {
    e.preventDefault()
    const newProduct = {
      id: uuidv4(),
      title,
      description,
      image,
      price,
      category,
      rating: {
        rate: rating,
        count: 0
      }
    }

    dispatch(addNewProduct(newProduct))
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setCategory('')
    setRating('')
  }

  const deleteProduct = (product) => {
    dispatch(deleteOneProduct(product))
  }

  const editProduct = (product) => {
    setEditMode(true)
    setTitle(product.title)
    setDescription(product.description)
    setImage(product.image)
    setPrice(product.price)
    setCategory(product.category)
    setRating(product.rating.rate)
    setHidden(false)
  }


  const edit = (e) => {
    e.preventDefault()
    const newProduct = {
      title,
      description,
      image,
      price,
      category,
      rating: {
        rate: rating,
        count: 0
      }
    }
    setHidden(true)
    dispatch(updateProduct(newProduct))
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setCategory('')
    setRating('')

    setEditMode(false)
  }


  const resetData = (e) => {
    e.preventDefault()
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setCategory('')
    setRating('')
    setEditMode(false)
    setHidden(true)
  }





  return (
    <>
      <section className="admin bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center mt-5">
        {
          editMode ? <h1 className='text-center mb-5'>Edit product</h1> : <h1 className='text-center mb-5'>Admin Page</h1>
        }
        <form onSubmit={addProduct} className="row justify-content-between gx-3 gy-2 align-items-center container" method='POST'>
          <div className="col-sm-4">
            <input
              onChange={(e) => setTitle(e.target.value)} value={title}
              type="text" className="form-control form-control-lg" placeholder="Title" />
          </div>

          <div className="col-sm-4">
            <input
              onChange={(e) => setDescription(e.target.value)} value={description}
              type="text" className="form-control form-control-lg" placeholder="Description" />
          </div>

          <div className="col-sm-4">
            <input
              onChange={(e) => setPrice(e.target.value)} value={price}
              type="number" min="0" className="form-control form-control-lg" placeholder="Price" />
          </div>

          <div className="col-sm-4">
            <input
              onChange={(e) => setCategory(e.target.value)} value={category}
              type="text" min="0" className="form-control form-control-lg" placeholder='Category' />
          </div>

          <div className="col-sm-4">
            <select
              onChange={(e) => setRating(e.target.value)} value={rating}
              className="form-select form-select-lg" name='rating'>
              <option >Rating...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-sm-4">
            <input
              onChange={(e) => setImage(e.target.value)} value={image} type="text" className="form-control form-control-lg" placeholder="Image" />
          </div>
          <p className='demo-link text-end '>Demo link: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"   </p>

          <div className="col-sm-4 d-flex align-items-end ">
            <button className="btn btn-outline-success btn-lg"  >Add</button>
            <button className="btn btn-outline-danger btn-lg ms-3" onClick={resetData}
              hidden={hidden}
            >Back</button>
            <button className="btn btn-outline-warning btn-lg ms-3" onClick={edit} hidden={hidden}  >Edit</button>
          </div>
        </form>
      </section >
      <section className="container spisak-putovanja py-5">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                products.map((product, index) => {
                  return (
                    <tr
                      key={uuidv4()}
                    >
                      <th scope="row">{index + 1}</th>
                      <td><img src={product.image} alt="" width="50" height="50" /></td>
                      <td className='short-text'>{product.title}</td>
                      <td className='short-text' >
                        {product.description}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.rating.rate}</td>
                      <td><button className="btn btn-outline-warning" onClick={() => editProduct(product)} >Edit</button></td>
                      <td><button className="btn btn-outline-danger" onClick={() => deleteProduct(product)} >Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section >
    </>
  )
}

export default Admin