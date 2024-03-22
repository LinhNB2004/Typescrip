// rafce
//tsrafce
// import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className='banner'
          src='https://cdn.tgdd.vn/Files/2022/03/01/1417785/my-pham-focallure-co-tot-khong-top-cac-san-pham-dang-mua-nhat-cua-focallure-202203011215188341.jpg'
          alt=''
        />{' '}
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='banner'
          src='https://theme.hstatic.net/1000312827/1001156103/14/coll_img_default.jpg?v=529'
          alt=''
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='banner' src='https://hangnhatgiatot.com/upload/MenuImg/03031503_banner_kemtrangda.jpg' alt='' />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
