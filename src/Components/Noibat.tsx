import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
const Noibat = () => {
  return (
    <div>
      <Container>
        <br></br>
        <Row>
          <Col>
            <Image
              width={300}
              src='https://i.pinimg.com/564x/df/d6/b3/dfd6b3ca3e45b7e3ee42639212f43f18.jpg'
              thumbnail
            />
          </Col>
          <Col>
            <Image
              width={300}
              src='https://i.pinimg.com/564x/fe/f9/b6/fef9b6f9a96eb9718250a39953cb658b.jpg'
              thumbnail
            />
          </Col>
          <Col>
            <Image
              width={300}
              src='https://i.pinimg.com/564x/a6/9a/5e/a69a5e495b2c5d0afa003e932281cfdc.jpg'
              thumbnail
            />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default Noibat
