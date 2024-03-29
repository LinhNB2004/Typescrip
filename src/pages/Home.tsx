import Banner from '@/Components/Banner'
import BasicExample from '@/Components/Basic'
import Chuyenmuc from '@/Components/Chuyenmuc'
import Footer from '@/Components/Footer'
import Noibat from '@/Components/Noibat'
import ProductList from '@/Components/ProductList'
import Sale from '@/Components/Sale'
import { TProduct } from '@/interfaces/TProduct'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      <Banner />
      <Noibat />
      <Chuyenmuc />
      <Container>
        <h3 className='dssp'>
          Sản Phẩm <br /> <button></button>{' '}
        </h3>

        <Row className='row'>
          {products.map((product) => (
            <Col className='product'>
              <Link to={`/shop/${product.id}`}>
                <Image width={240} height={200} src={product.thumbnail} rounded />
              </Link>

              <div className='thongtin'>
                <span>{product.price}.000.VNĐ</span> <br />
                <Link to={`/shop/${product.id}`}>{product.title}</Link>
                <p>{product.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Sale />
      <BasicExample />
    </div>
  )
}

export default Home
