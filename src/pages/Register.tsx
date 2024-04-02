import React from 'react'
import { useForm } from 'react-hook-form'

import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { TUser } from '../interfaces/TUser'
import instance from '@/apis'
import { useNavigate } from 'react-router-dom'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUser>({
    resolver: joiResolver(userSchema)
  })
  const onSubmit = (user: TUser) => {
    ;(async () => {
      const { data } = await instance.post('/register', user)
      console.log(data)
      if (data.user) {
        window.confirm('Resgister success, switch to login page') && navigate('/Login')
      }
    })()
  }
  return (
    <div>
      <div className='box'>
        <div className='dangnhap'>
          <h2>Đăng Ký</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=''>Tên tài khoản:*</label> <br />
            <input
              placeholder='Nhập tên tài khoản'
              type='email'
              id='email'
              {...register('email', {
                required: true
              })}
            />
            {errors.email && <div className='text-danger'>{errors.email.message}</div>}
            <label htmlFor=''>Mật khẩu:*</label> <br />
            <input
              placeholder='Mật khẩu'
              type='password'
              id='password'
              {...register('password', {
                required: true,
                minLength: 6
              })}
            />
            {errors.password && <div className='text-danger'>{errors.password.message}</div>}
            <button>Đăng Ký</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
