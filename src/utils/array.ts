import { v4 as uuid } from 'uuid'

export const populateArrayForRendering = (length: number, props: string[] = []) => {
  const array: {
    [key: string]: string
  }[] = []

  for (let i = 0; i < length; i++) {
    array.push({ id: uuid() })
    for (let j = 0; j < props.length; j++) {
      array[i][props[j]] = ''
    }
  }

  return array
}
