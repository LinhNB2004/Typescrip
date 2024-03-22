import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Noibat = () => {
  return (
    <div>
      <Container>
        <br></br>
        <Row className='noibat'>
          <Col className='noibat1'>
            <h6>
              <b>
                Mỹ Phẩm Cao Cấp <br />
                Chính Hãng
              </b>
            </h6>
            <a href='http://'>Xem thêm </a>
          </Col>
          <Col className='noibat2'>
            <h6>
              <b>
                Mỹ Phẩm Cao Cấp <br />
                Chính Hãng
              </b>
            </h6>
            <a href='http://'>Xem thêm </a>
          </Col>
          <Col className='noibat3'>
            <h6>
              <b>
                Mỹ Phẩm Cao Cấp <br />
                Chính Hãng
              </b>
            </h6>
            <a href='http://'>Xem thêm </a>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default Noibat
