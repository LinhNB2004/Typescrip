import React from 'react'

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
      <div className='box'>
        <div className='dangnhap'>
          <h2>Đăng Ký</h2>
          <form action='' method='post'>
            <label htmlFor=''>Tên tài khoản:*</label> <br />
            <input type='text' placeholder='Nhập tên tài khoản' />
            <label htmlFor=''>Mật khẩu:*</label> <br />
            <input type='password' placeholder='Mật khẩu' />
            <label htmlFor=''>Nhập lại mật khẩu:*</label> <br />
            <input type='password' placeholder='Nhập lai mat khau' />
            <button type='submit'>Đăng Ký</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
