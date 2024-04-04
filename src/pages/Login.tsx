import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { User } from '@/interfaces/User'
import { useNavigate } from 'react-router-dom'
import instance from '@/services'

const UserSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6)
})
const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(UserSchema)
  })
  const onSubmit = (user: User) => {
    // console.log(user)
    ;(async () => {
      const { data } = await instance.post('/login', user)
      console.log(data)
      if (data.user) {
        // duy trì quyền đăng nhập
        sessionStorage.setItem('accessToken', data.accessToken)
        const isConfirm = confirm('Login successfully, switch home page?')
        if (isConfirm) {
          navigate('/')
        }
      }
    })()
  }
  return (
    <div>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            className='form-control'
            id='email'
            placeholder='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='password'
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className='text-danger'>{errors.password.message}</span>}{' '}
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
