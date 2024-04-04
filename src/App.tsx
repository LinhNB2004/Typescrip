import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Addproduct from './pages/Addproduct'
import Editproduct from './pages/Editproduct'
import Register from './pages/Register'
import Login from './pages/Login'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './services'

function App() {
  const navigate = useNavigate()
  // HIỂN THỊ
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get('/products')
      setProducts(data)
    })()
  }, [])
  // XÓA
  const handleDeleteProduct = (id: number) => {
    // console.log(id)
    ;(async () => {
      const isConfirm = confirm('Are you sure?')
      if (isConfirm) {
        await instance.delete(`/products/${id}`)
        setProducts(products.filter((item) => item.id !== id && item))
      }
    })()
  }

  // ADDPRODUCT
  const handleAddProduct = (product: TProduct) => {
    // console.log(product)
    ;(async () => {
      const { data } = await instance.post(`/products`, product)
      setProducts([...products, data])
      navigate('/')
    })()
  }

  // EDITPRODUCT
  const handleEditProduct = (product: TProduct) => {
    // console.log(product)
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/')
    })()
  }
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/add'>Add new product</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
          <li>
            <NavLink to='login'>Login</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route index element={<Home onDel={handleDeleteProduct} products={products} />} />
        <Route path='/add' element={<Addproduct onSubmit={handleAddProduct} />} />
        <Route path='/edit/:id' element={<Editproduct onSubmit={handleEditProduct} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
