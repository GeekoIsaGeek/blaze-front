import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

const useUploadPhoto = () => {
  const uploadPhoto = async (image: File) => {
    try {
      if (image) {
        const formData = new FormData()
        formData.append('image', image)

        const response = await request.post('/api/photos/upload', formData, {
          headers: {
            Authorization: `Bearer ${getToken('auth')}`
          }
        })
        return response.data.image as { url: string; id: number }
      }
    } catch (e) {
      return
    }
  }
  return { uploadPhoto }
}
export default useUploadPhoto
