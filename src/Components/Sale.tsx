import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
const Sale = () => {
  return (
    <div>
      <Container>
        <br></br>
        <Row className='sale'>
          <Col className='sale1'>
            <div className='content'>
              <p>CHI ÂN KHÁCH HÀNG</p>
              <h6>
                BỘ MAKEUP <br />
                GIẢM GIÁ <b>50%</b>
              </h6>
              <Button variant='danger'>Xem</Button>
            </div>
          </Col>
          <Col className='sale2'>
            <div className='content'>
              <p>CHI ÂN KHÁCH HÀNG</p>
              <h6>
                SET CHĂM SÓC DA MẶT <br />
                GIẢM GIÁ <b>30%</b>
              </h6>
              <Button variant='danger'>Xem</Button>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default Sale
