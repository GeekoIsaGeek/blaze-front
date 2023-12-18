import request from '@/config/axiosInstance'
import { getPhotoUrl } from '@/helpers/string'
import { getToken } from '@/helpers/tokens'

const useUploadPhoto = () => {
  const uploadPhoto = async (image: File, setImage: (path: string) => void) => {
    try {
      if (image) {
        const formData = new FormData()
        formData.append('image', image)

        const response = await request.post('/api/upload-photo', formData, {
          headers: {
            Authorization: `Bearer ${getToken('auth')}`
          }
        })
        setImage(getPhotoUrl(response.data.image.src))
      }
    } catch (e) {
      return
    }
  }
  return { uploadPhoto }
}
export default useUploadPhoto
