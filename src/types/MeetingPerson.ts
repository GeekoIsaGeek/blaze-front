import type { Language } from './Languages'
import type { Interest, Photo } from './Pinia'

export interface Person {
  id: number
  username: string
  age: number
  location: string
  languages: Language[]
  bio: string
  interests: Interest[]
  photos: Photo[]
}
