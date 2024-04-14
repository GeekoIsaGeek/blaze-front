import { MAX_AGE, MIN_AGE } from '@/config/constants'

type CalcPosXParams = {
  leftLimit: number
  rightLimit: number
  posX: number
}
export const getPosXConsideringLimits = ({ leftLimit, rightLimit, posX }: CalcPosXParams) => {
  return Math.max(leftLimit, Math.min(posX, rightLimit))
}

export const getActualAge = (positionWidthratio: number) => {
  return Math.round(MIN_AGE + positionWidthratio * (MAX_AGE - MIN_AGE))
}

export const getPositionFromAge = (age: number | undefined, wrapperWidth: number) => {
  if (!age) return
  return ((age - MIN_AGE) / (MAX_AGE - MIN_AGE)) * wrapperWidth
}
