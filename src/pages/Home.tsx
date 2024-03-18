import Banner from '@/Components/Banner'
import Footer from '@/Components/Footer'
import Noibat from '@/Components/Noibat'
import ProductList from '@/Components/ProductList'
import Container from 'react-bootstrap/Container'
type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Container>
        <Banner />
        <Noibat />
        <h2 className='dssp'>Danh Sách Sản Phẩm</h2>
        <ProductList />
      </Container>
    </div>
  )
}

export default Home
