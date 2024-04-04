import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { TProduct } from '@/interfaces/TProduct'
import { useParams } from 'react-router-dom'
import instance from '@/services'
import { title } from 'process'

type Props = {
  onSubmit: (product: TProduct) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  thumbnail: Joi.string(),
  description: Joi.string().required()
})
const Editproduct = ({ onSubmit }: Props) => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onEdit = (product: TProduct) => {
    onSubmit({ ...product, id })
  }
  return (
    <div>
      <form action='' onSubmit={handleSubmit(onEdit)}>
        <h1>AddProduct</h1>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true, minLength: 3, maxLength: 100 })}
            defaultValue={product?.title}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('price', { required: true, min: 0 })}
            defaultValue={product?.price}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}{' '}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('description', { required: true })}
            defaultValue={product?.description}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Editproduct
