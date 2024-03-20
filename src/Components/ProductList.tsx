import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setProducts(data)
    //   })

    // Cach 2:
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
    // ! nâng cao.
    return () => {
      // ! Cleanup function
    }
  }, [])
  /**
   * ! DependencyList
   * ? TH1: Không có DependencyList - cứ có thay đổi thì render lại.
   * ? TH2: [] - Empty Array - Chỉ chạy một lần khi componentDidMount
   * ? TH3: [state1, state2,...] - Chạy lại khi 1 trong số các state được liệt kê có sự thay đổi.
   */
  // ! DependencyList = Danh sách phụ thuộc
  return (
    <div>
      <Container>
        <Row className='row'>
          {products.map((product) => (
            <Col className='product'>
              <Image width={225} height={200} src={product.thumbnail} rounded />
              <div className='thongtin'>
                <span>{product.price}.000.VNĐ</span>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductList
