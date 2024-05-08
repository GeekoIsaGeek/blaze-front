<script setup lang="ts">
import ArrowIcon from '@/components/icons/TheArrowRightIcon.vue'
import { ref } from 'vue'
import SettingsDropDown from '@/components/profile/SettingsDropDown.vue'
import { SHOW_OPTIONS } from '@/config/constants'
import type { Preference } from '@/types/Pinia'
import AgeRangeSlider from '@/components/profile/AgeRangeSlider.vue'
import Logo from '@/components/icons/TheFireIcon.vue'
import { logoutUser, deleteUser } from '@/services/User'
import { useUserStore } from '@/stores/UserStore'
import { useRouter } from 'vue-router'
import DialogModal from '@/components/UI/DialogModal.vue'
import type { ProfileForm } from '@/types/Forms'

const showDropdown = ref(false)
const { clearUser, user } = useUserStore()
const { push: navigate } = useRouter()

const showModal = ref(false)

const props = defineProps<{
  preferences: Preference
  accountSettings: ProfileForm
}>()

const emit = defineEmits<{
  'update:preferences': [Preference]
  'update:accountSettings': [ProfileForm]
}>()

const handleSelect = (selected: string) =>
  emit('update:preferences', {
    ...props.preferences,
    show: selected as (typeof SHOW_OPTIONS)[number]['gender']
  })

const handleAgeRangeChange = (from: number, to: number) =>
  emit('update:preferences', {
    ...props.preferences,
    age_from: from,
    age_to: to
  })

const handleLogout = async () => {
  const status = await logoutUser()
  if (status === 200) {
    clearUser()
    navigate({ name: 'login' })
  }
}

const handleAccountDeletion = async () => {
  const status = await deleteUser()
  if (status === 204) {
    clearUser()
    navigate({ name: 'register' })
  }
}

const updateAccountSettings = (key: 'email' | 'username', value: string) => {
  if (value) {
    emit('update:accountSettings', { ...props.accountSettings, [key]: value })
  }
}
</script>
<template>
  <Transition
    enterFromClass="opacity-0 bottomSheetTransition"
    enterToClass="opacity-1 bottomSheetTransition"
    appear
  >
    <div class="bg-white min-h-full py-4">
      <h2 class="pl-4 font-medium text-lg pb-2 text-center">Preferences</h2>
      <div
        class="border-y border-slate-300 p-4 pr-2 cursor-pointer hover:bg-gray-100 transitions select-none"
        @click="showDropdown = !showDropdown"
      >
        <div class="flex justify-between w-full">
          <span class="text-lg">Show</span>
          <ArrowIcon
            class="fill-gray-500 w-8 h-8 min-w-8 group-hover:translate-x-1 transitions"
            :class="[showDropdown ? '-rotate-90' : 'rotate-90']"
          />
        </div>
        <SettingsDropDown
          :options="SHOW_OPTIONS"
          :showDropdown="showDropdown"
          :selected="preferences.show || ''"
          @handleSelect="handleSelect"
        />
      </div>
      <AgeRangeSlider @handleAgeRangeChange="handleAgeRangeChange" />

      <h2 class="pl-4 font-medium text-lg pb-2 text-center mt-4">Account</h2>
      <div class="flex items-center border px-4 border-slate-300">
        <label for="email" class="pr-4 border-r border-slate-400 font-medium">Email</label>
        <input
          type="text"
          class="w-full h-14 outline-none pl-4"
          name="email"
          id="email"
          placeholder="Enter your email"
          :value="user?.email"
          @change="
            (e: InputEvent) =>
              updateAccountSettings('email', (e?.target as HTMLInputElement)?.value)
          "
        />
      </div>
      <div class="flex items-center border px-4 border-slate-300 mt-4">
        <label for="username" class="pr-4 border-r border-slate-400 font-medium">Username</label>
        <input
          type="text"
          class="w-full h-14 outline-none pl-4"
          name="username"
          id="username"
          placeholder="Enter your username"
          :value="user?.username"
          @change="
            (e: InputEvent) =>
              updateAccountSettings('username', (e?.target as HTMLInputElement)?.value)
          "
        />
      </div>

      <button
        class="p-4 text-center w-full text-lg mt-12 hover:bg-gray-100 transitions border-y shadow-sm border-slate-300"
        @click="handleLogout"
      >
        Logout
      </button>

      <div class="my-10 flex justify-center flex-col items-center">
        <Logo class="fill-pinkishRed w-20 h-20" />
        <p class="text-xl font-medium text-gray-500">Blaze ©</p>
      </div>

      <div class="w-full flex justify-center pb-10">
        <button
          class="py-2 text-center w-[70%] text-lg bg-pinkishRed/80 text-white hover:text-gray-600 hover:bg-gray-100 transitions border border-transparent hover:border-slate-300 shadow-sm rounded-md"
          @click="showModal = true"
        >
          Delete Account
        </button>
        <DialogModal
          dialogQuestion="Are you sure you want to delete your account?"
          @closeModal="() => (showModal = false)"
          @handler="() => handleAccountDeletion()"
          v-if="showModal"
        />
      </div>
    </div>
  </Transition>
</template>
