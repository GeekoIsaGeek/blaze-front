import type { Language } from './Languages'

export type Interest = {
  id: number
  interest: string
}
export type Preference = {
  show: 'men' | 'women' | 'everyone' | undefined
  age_from: number | undefined
  age_to: number | undefined
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
  location: string
  gender: 'male' | 'female' | 'other'
  bio: string
  interests: Interest[]
  languages: Language[]
  preference: Preference
}
