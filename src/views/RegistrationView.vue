<script setup lang="ts">
import { useForm } from 'vee-validate'
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import { RouterLink } from 'vue-router'
import { registrationSchema } from '@/schemas/Auth'
import request from '@/config/axiosInstance'
import type { RegistrationFields } from '@/types/AuthFormFields'
import { ref } from 'vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const showSuccessMessage = ref(false)
const serverError = ref('')

const { handleSubmit } = useForm<RegistrationFields>({
  validationSchema: registrationSchema
})

const handleRegistration = handleSubmit(async (values) => {
  const { username, email, password, birthdate } = values
  const response = await request.post('/api/register', { username, email, password, birthdate })
  if (response.status === 200) {
    showSuccessMessage.value = true
  } else {
    serverError.value = response.data.error
  }
})
</script>

<template>
  <AuthLayout :submitHandler="handleRegistration" :serverError="serverError">
    <div v-if="showSuccessMessage" class="text-primary font-semibold text-xl">
      Registration succeed!
    </div>
    <div class="flex flex-col items-center justify-center gap-3 w-full" v-else>
      <FormField name="username" type="text" placeholder="Username" />
      <FormField name="email" type="email" placeholder="Email" />
      <FormField name="birthdate" type="date" class="w-full" />
      <FormField name="password" type="password" placeholder="Password" />
      <FormField name="password_confirm" type="password" placeholder="Confirm Password" />
      <SubmitButton content="Register" />
    </div>
    <RouterLink to="/login" class="text-fadedPrimary underline">Log in</RouterLink>
  </AuthLayout>
</template>
