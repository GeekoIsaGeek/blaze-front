import type { Language } from './Languages'

export type Interest = {
  id: number
  interest: string
}
export type Preference = {
  show: 'male' | 'female' | 'everyone' | undefined
  age_from: number | undefined
  age_to: number | undefined
}

export type Photo = {
  id: number
  url: string
}
export interface User {
  id: number
  age: number
  email: string
  username: string
  photos: Photo[]
  location: string
  gender: 'male' | 'female' | 'other'
  bio: string
  interests: Interest[]
  languages: Language[]
  preference: Preference
}
