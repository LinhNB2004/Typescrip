export type usersHair = {
  color: string
  type: string
}
export type addressCoordinates = {
  lat: number
  lng: number
}
export type usersAddress = {
  address: string
  city: string
  coordinates: addressCoordinates
  postalCode: string
  state: string
}
export type usersBank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export type usersCompany = {
  address: usersAddress
  department: string
  name: string
  title: string
}
export type usersCrypto = {
  coin: string
  wallet: string
  network: string
}
export type User = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: usersHair
  domain: string
  ip: string
  address: usersAddress
  macAddress: string
  university: string
  bank: usersBank
  company: usersCompany
  ein: string
  ssn: string
  userAgent: string
  crypto: usersCrypto
}
