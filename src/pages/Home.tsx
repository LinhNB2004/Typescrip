import { TProduct } from '@/interfaces/TProduct'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
  onDel: (id: number) => void
}
const Home = ({ products, onDel }: Props) => {
  //   console.log(products)

  return (
    <div>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => onDel(Number(item.id))} className='btn btn-danger '>
                  Delete
                </button>
                <Link className='btn btn-warning  ' to={`/edit/${item.id}`}>
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
