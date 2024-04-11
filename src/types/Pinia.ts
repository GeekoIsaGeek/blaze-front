export type Interest = {
  id: number
  interest: string
}
export interface User {
  id: number
  birthdate: string
  email: string
  username: string
  photos: {
    id: number
    url: string
  }[]
  interests: Interest[]
}
