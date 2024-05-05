import NoImage from '/No-Image.png'

export const getPhotoUrl = (path: string | undefined) => {
  if (!path) return NoImage

  if (path?.startsWith('photos')) {
    return `${import.meta.env.VITE_SERVER_URL}/storage/${path}`
  } else {
    return path
  }
}
