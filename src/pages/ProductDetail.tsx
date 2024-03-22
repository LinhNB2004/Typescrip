import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { TProduct } from '@/interfaces/TProduct'
import BasicExample from '@/Components/Basic'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null) // Sửa đổi useState để lưu trữ một sản phẩm duy nhất, không phải mảng sản phẩm

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProduct(data)
      })
  }, [id])

  return (
    <div>
      <Container>
        {product && (
          <div className='ctsp'>
            <div className='anh'>
              <Image src={product.thumbnail} style={{ width: 500, height: 530, borderRadius: '50px 0 0 50px' }} />
            </div>
            <div className='nd'>
              <h3>{product.title}</h3>
              <button className='bt'></button> <br />
              <span>
                <b> {product.price}.000.VNĐ</b>
              </span>
              <br />
              <p>{product.description}</p>
              <p>
                Hàng chính hãng 100% Gói hàng đảm bảo Giao tận nhà trên toàn quốc Giao hàng thu tiền tận nhà Kiểm hàng
                trước khi thanh toán. <br />
                <b>Vận chuyển:</b> Miễn phí <br />
                <b>Tình trạng:</b> Còn hàng <br />
                <b>Khối lượng:</b> 8g <br />
                <b>Số lượng: </b>
                <button className='button'>-</button>
                <button className='button'>1</button>
                <button className='button'>+</button>
              </p>
              <button className='button1'>THÊM VÀO GIỎ HÀNG</button>
              <button className='button2'>MUA NGAY</button>
            </div>
          </div>
        )}
        <BasicExample />
      </Container>
    </div>
  )
}

export default ProductDetail
