<script setup lang="ts">
import TopPanel from '@/components/profile/TopPanel.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import UserGallery from '@/components/profile/UserGallery.vue'
import { useForm } from 'vee-validate'
import UserAbout from '@/components/profile/UserAbout.vue'
import UserInterests from '@/components/profile/UserInterests.vue'
import UserLocation from '@/components/profile/UserLocation.vue'
import UserGender from '@/components/profile/UserGender.vue'
import UserLanguages from '@/components/profile/UserLanguages.vue'
import type { ProfileForm, UpdatedPreferences } from '@/types/Forms'
import { useUserStore } from '@/stores/UserStore'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import UserSettings from '@/components/profile/UserSettings.vue'

const { handleSubmit, resetForm } = useForm()
const { updateProfile, updateUserPreferences } = useUserStore()
const { push: navigate } = useRouter()
const { query } = useRoute()

const userPreferences = useUserStore().user?.preference

const currentPreferences = ref({
  show: userPreferences?.show,
  age_from: userPreferences?.age_from,
  age_to: userPreferences?.age_to
})

onMounted(() => {
  if (query?.show_settings) {
    showSettings.value = true
  }
})

const showSettings = ref(false)

const handleUpdate = handleSubmit(async (values) => {
  const payload: ProfileForm = {}

  if (values?.about) payload.bio = values.about
  if (values?.location) payload.location = values.location

  updateProfile(payload)
  resetForm()
  navigate({ name: 'feed' })
})

const updatePreferences = () => {
  const payload: UpdatedPreferences = {}

  if (currentPreferences.value?.show && !(currentPreferences.value.show === userPreferences?.show))
    payload.show = currentPreferences.value.show

  if (
    currentPreferences.value.age_from &&
    !(currentPreferences.value.age_from === userPreferences?.age_from)
  )
    payload.age_from = currentPreferences.value.age_from

  if (
    currentPreferences.value.age_to &&
    !(currentPreferences.value.age_to === userPreferences?.age_to)
  )
    payload.age_to = currentPreferences.value.age_to

  updateUserPreferences(payload)
  showSettings.value = false
}
</script>

<template>
  <TopPanel
    @updateProfile="handleUpdate"
    v-model:showSettings="showSettings"
    @updatePreferences="updatePreferences"
  />
  <div
    class="w-full h-full max-h-[calc(100vh-9.5rem)] desktop:max-h-full overflow-y-auto text-gray-700 bg-gray-200 rounded-b-2xl flex flex-col gap-4 shadow-screen"
  >
    <UserSettings v-if="showSettings" v-model:preferences="currentPreferences" />
    <div v-else>
      <UserGallery />
      <form @submit="handleUpdate" class="flex flex-col gap-4">
        <UserAbout />
        <UserInterests />
        <UserLanguages />
        <UserGender />
        <UserLocation />
      </form>
    </div>
  </div>
  <NavigationPanel />
</template>
