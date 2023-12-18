export interface User {
  id: number
  birthdate: string
  email: string
  username: string
  photos: {
    id: string
    src: string
  }[]
}
