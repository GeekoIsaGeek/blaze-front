import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import { useUserStore } from '@/stores/UserStore'

const useDeletePhoto = () => {
  const { removePhoto } = useUserStore()

  const deletePhoto = async (id: number) => {
    try {
      const response = await request.delete(`/api/photos/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      })
      if (response.status === 200) {
        removePhoto(id)
      }
      return response.status
    } catch (e) {
      console.log(e)
    }
  }
  return { deletePhoto }
}

export default useDeletePhoto
