<script setup lang="ts">
import { useForm } from 'vee-validate'
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import logo from '/public/favicon.svg'
import { RouterLink } from 'vue-router'
import { registrationSchema } from '@/schemas/Auth'
import request from '@/config/axiosInstance'
import { type RegistrationFields } from '@/types/AuthFormFields'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const showSuccessMessage = ref(false)

const { handleSubmit } = useForm<RegistrationFields>({
  validationSchema: registrationSchema
})

const handleRegistration = handleSubmit(async (values) => {
  const { username, email, password, birthdate } = values
  const response = await request.post('/register', { username, email, password, birthdate })
  if (response.status === 200) {
    showSuccessMessage.value = true
  }
})
</script>

<template>
  <form
    @submit="handleRegistration"
    class="flex flex-col items-center justify-center gap-3 bg-white rounded-md px-20 py-32 max-w-[400px] shadow-lg w-full"
  >
    <img :src="logo" class="w-[50px] mb-10" />
    <div v-if="showSuccessMessage" class="text-primary font-semibold text-xl">
      Registration succeed!
    </div>
    <div class="flex flex-col items-center justify-center gap-3" v-else>
      <FormField name="username" type="text" placeholder="Username" />
      <FormField name="email" type="email" placeholder="Email" />
      <FormField name="birthdate" type="date" class="w-full" />
      <FormField name="password" type="password" placeholder="Password" />
      <FormField name="password_confirm" type="password" placeholder="Confirm Password" />
      <SubmitButton content="Register" />
    </div>
    <RouterLink to="/login" class="text-fadedPrimary underline">Log in</RouterLink>
  </form>
</template>
