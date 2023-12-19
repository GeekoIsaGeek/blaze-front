import UUID from 'uuid-int'

export const populateArrayForRendering = (length: number, props: string[] = []) => {
  const array: {
    [key: string]: string | number
  }[] = []

  for (let i = 0; i < length; i++) {
    array.push({ id: UUID(0).uuid() })
    for (let j = 0; j < props.length; j++) {
      array[i][props[j]] = ''
    }
  }

  return array
}
