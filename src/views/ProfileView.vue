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
import type { ProfileForm } from '@/types/Forms'
import { useUserStore } from '@/stores/UserStore'
import { useRouter } from 'vue-router'

const { handleSubmit, resetForm } = useForm()
const { updateProfile } = useUserStore()
const { push: navigate } = useRouter()

const handleUpdate = handleSubmit(async (values) => {
  const payload: ProfileForm = {}

  if (values?.about) payload.bio = values.about
  if (values?.location) payload.location = values.location

  updateProfile(payload)
  resetForm()
  navigate({ name: 'feed' })
})
</script>

<template>
  <TopPanel @updateProfile="handleUpdate" />
  <div
    class="w-full h-full max-h-[calc(100vh-9.5rem)] desktop:max-h-full overflow-y-auto text-gray-700 bg-slate-200 rounded-b-2xl flex flex-col gap-4 shadow-screen"
  >
    <div>
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
