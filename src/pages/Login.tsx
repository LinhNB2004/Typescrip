import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <div className='box'>
        <div className='dangnhap'>
          <h2>Đăng Nhập</h2>
          <form action='' method='post' style={{ height: '300px' }}>
            <label htmlFor=''>Tên tài khoản:*</label> <br />
            <input type='text' placeholder='Nhập tên tài khoản' />
            <label htmlFor=''>Mật khẩu:*</label> <br />
            <input type='password' placeholder='Mật khẩu' />
            <button type='submit'>Đăng Nhập</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
