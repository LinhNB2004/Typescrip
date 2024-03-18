type user = {
  name: string
  age: number
  address: string
  job: string
}
const myInfor = {
  name: 'Le thi thuy linh',
  age: 20,
  address: 'Ninh Binh',
  job: 'student'
}

const myStudentInfor: user = {
  name: 'Mai',
  age: 19,
  address: 'Ninh Binh',
  job: 'student'
}
console.log(`hello ${myInfor.name}`)
