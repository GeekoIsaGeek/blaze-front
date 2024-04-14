import { onMounted, ref } from 'vue'

const useIsMobile = () => {
  const isMobile = ref(window.innerWidth < 640)

  onMounted(() => {
    window.addEventListener('resize', () => (isMobile.value = window.innerWidth < 640))
  })

  return { isMobile }
}

export default useIsMobile
