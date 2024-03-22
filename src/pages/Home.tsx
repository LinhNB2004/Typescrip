import Banner from '@/Components/Banner'
import BasicExample from '@/Components/Basic'
import Chuyenmuc from '@/Components/Chuyenmuc'
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
      <Chuyenmuc />
      <ProductList />
      <Sale />
      <BasicExample />
    </div>
  )
}

export default Home
