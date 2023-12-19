export const getPhotoUrl = (path: string) => {
  if (path?.startsWith('photos')) {
    return `${import.meta.env.VITE_SERVER_URL}/storage/${path}`
  } else {
    return path
  }
}
