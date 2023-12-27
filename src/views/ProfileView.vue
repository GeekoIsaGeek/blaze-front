<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import TopPanel from '@/components/profile/TopPanel.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import UserGallery from '@/components/profile/UserGallery.vue'
import { useForm } from 'vee-validate'
import UserAbout from '@/components/profile/UserAbout.vue'
import UserInterests from '@/components/profile/UserInterests.vue'

const user = useUserStore().user

const { handleSubmit } = useForm()

const handleUpdate = handleSubmit(async (values) => {
  console.log(values)
})
</script>

<template>
  <TopPanel />
  <div
    class="w-full h-full max-h-[calc(100vh-9.5rem)] desktop:max-h-full overflow-y-auto text-gray-700 bg-slate-200 rounded-b-2xl flex flex-col gap-4"
  >
    <div>
      <UserGallery />
      <form @submit="handleUpdate" class="flex flex-col gap-4">
        <UserAbout />
        <UserInterests />
      </form>
    </div>
  </div>
  <NavigationPanel />
</template>
