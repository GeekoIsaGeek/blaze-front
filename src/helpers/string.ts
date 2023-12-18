export const getPhotoUrl = (path: string) => {
  if (path.startsWith('images')) {
    return `${import.meta.env.VITE_SERVER_URL}/storage/${path}`
  } else {
    return path
  }
}
