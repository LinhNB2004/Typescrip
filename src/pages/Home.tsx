import Banner from '@/Components/Banner'
import Footer from '@/Components/Footer'
import Noibat from '@/Components/Noibat'
import ProductList from '@/Components/ProductList'
import Sale from '@/Components/Sale'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <Noibat />
      <h2 className='dssp'>
        Sản Phẩm <br /> <button></button>{' '}
      </h2>

      <ProductList />
      <Sale />
    </div>
  )
}

export default Home
