import NoImage from '/No-Image.png'

export const getPhotoUrl = (path: string | undefined, returnDefault: boolean = true) => {
  if (!path && returnDefault) return NoImage

  if (path?.startsWith('photos')) {
    return `${import.meta.env.VITE_SERVER_URL}/storage/${path}`
  } else {
    return path
  }
}
