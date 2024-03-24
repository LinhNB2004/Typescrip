import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Sale = () => {
  return (
    <div>
      <br></br>
      <Row className='footer'>
        <Col>
          <div className='ft'>
            <h4>CHÚNG TÔI</h4>
            <p>Giới thiệu</p>
            <p>Tổng công ty</p>
            <p>Tuyển dụng</p>
            <p>Thẻ hội viên</p>
          </div>
        </Col>
        <Col>
          <div className='ft'>
            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            <p>Hướng dẫn mua sản phẩm</p>
            <p>Bảo mật thông tin</p>
            <p>Quy định và chính sách</p>
            <p>Liên hệ</p>
          </div>
        </Col>
        <Col>
          <div className='ft'>
            <h4>MỸ PHẨM THÙY LINH</h4>
            <p>Hãy để lại email của bạn để nhận được những thông tin, ưu đãi từ Mỹ Phẩm Thùy Linh</p>
            <p>Email: Myphamthuylinh@gmail.com.vn</p>
            <b>Hotline: 18007200</b>
          </div>
        </Col>
        <div className='chan'>
          <hr />
          <p>
            © 2021 - Bản quyền của Mỹ Phẩm Thùy Linh - thương hiệu thuộc AKA Furniture <br />
            Từ năm 1999 - thương hiệu đăng ký số 284074 Cục sở hữu trí tuệ
          </p>
        </div>
      </Row>

      <br />
    </div>
  )
}

export default Sale
