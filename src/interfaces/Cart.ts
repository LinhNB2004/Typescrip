export type cartsProducts = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

export type Cart = {
  id: number
  products?: Array<cartsProducts>
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
