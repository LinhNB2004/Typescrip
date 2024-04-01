import './App.css'
import Home from './pages/Home'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import { createProduct, getProducts, removeProduct, updateProduct } from './apis/product'
import ProductEdit from './pages/admin/ProductEdit'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    // Cach 2:
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])

  // console.log(products)
  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProduct(product) // Sản phẩm mới thêm
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data]) // ([...sp cũ], sp mới)
      navigate('/admin')
    })()
  }
  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const updatePro = await updateProduct(product) // Sản phẩm mới thêm
      // setProducts((prev) => [...prev, data])
      setProducts(products.map((item) => (item.id === updatePro.id ? updatePro : item)))
      navigate('/admin')
    })()
  }
  const handleDelete = (id: number | undefined) => {
    // console.log(id)
    ;(async () => {
      const isConfirm = window.confirm('Are you sure?')
      if (isConfirm) {
        await removeProduct(`${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    })()
  }
  return (
    <>
      <Header />
      <Routes>
        {/* client */}
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        {/* admin */}
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} onDel={handleDelete} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
          <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
        </Route>
        {/* not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
