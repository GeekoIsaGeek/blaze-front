export const GALLERY_LIMIT = 6
export const GENDERS = ['male', 'female', 'other'] as const
export const MAX_AGE = 90
export const MIN_AGE = 18

export const SHOW_OPTIONS = [
  { gender: 'male', displayAs: 'men' },
  { gender: 'female', displayAs: 'women' },
  { gender: 'everyone', displayAs: 'everyone' }
] as const
