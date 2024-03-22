import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function BasicExample() {
  return (
    <Container>
      <div className='dssp'>
        <h3>Tin tức & Làm đẹp</h3>
        <button></button>
      </div>
      <Card style={{ width: '16rem', float: 'left', margin: '0 5px 0 30px' }}>
        <Card.Img
          variant='top'
          src='https://file.hstatic.net/200000073977/article/lich_giao_tet_web_9d68c4a318d546589962039c2280a66f_master.jpg'
        />
        <Card.Body>
          <Card.Title>THÔNG BÁO LỊCH GIAO HÀNG TẾT GIÁP THÌN 2024</Card.Title>
          <Card.Text>
            Năm Giáp Thìn đang đến rất gần, với mong muốn giúp Quý khách hàng có được kế hoạch mua sắm phù hợp và nhận
            hàng kịp thời...
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem', float: 'left', margin: '0 5px' }}>
        <Card.Img
          variant='top'
          src='https://file.hstatic.net/200000073977/article/ha-ho-nhan-2-giai-thuong-tai-l_officiel-beauty-choice-awards-2023_8f1f0c339ac142f8994e51685abf43c5_master.jpg'
        />
        <Card.Body>
          <Card.Title>Hà Hồ nở mặt khi "đứa con tinh thần" liên tiếp nhận 2 chiếc</Card.Title>
          <Card.Text>
            M.O.I Cosmetics bất ngờ được xướng tên tại lễ trao giải L'Officiel Beauty Awards 2023, trở thành thương hiệu
            Việt giành cú đúp...{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem', float: 'left', margin: '0 5px' }}>
        <Card.Img
          variant='top'
          src='https://file.hstatic.net/200000073977/article/metics-thang-lon-tai-giai-thuong-doanh-nghiep-chau-a-thai-binh-duong-1_e9fdbfe4b4d7460fa284e0249025f634_master.jpg'
        />
        <Card.Body>
          <Card.Title>M.O.I Cosmetics thắng lớn tại giải thưởng doanh nghiệp</Card.Title>
          <Card.Text>
            5 năm trước, khi nhắc đến thương hiệu mỹ phẩm, người Việt đa phần nhớ đến các nhãn Hàn Quốc, Nhật Bản, Châu
            Âu…
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem' }}>
        <Card.Img
          variant='top'
          src='https://file.hstatic.net/200000073977/article/son-thoi-love-moi_df4d383ff55240118319f8558eb76284_master.png'
        />
        <Card.Body>
          <Card.Title>Son thỏi Love M.O.I, làm đẹp với những món bánh đậm chất</Card.Title>
          <Card.Text>
            Hòa mình vào không gian lãng mạn và tinh tế của Pháp, bộ sưu tập son thỏi Love M.O.I cao cấp phiên bản giới
            hạn hứa hẹn mang đến cho...{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BasicExample
