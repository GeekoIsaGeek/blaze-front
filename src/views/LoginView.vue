<script setup lang="ts">
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from 'vee-validate'
import type { LoginFields } from '@/types/AuthFormFields'
import { loginSchema } from '@/schemas/Auth'
import request from '@/config/axiosInstance'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type { ErrorResponse } from '@/types/Server'
import { useUserStore } from '@/stores/UserStore'
import { storeToRefs } from 'pinia'

const router = useRouter()
const { user } = storeToRefs(useUserStore())
const serverError = ref('')

const { handleSubmit } = useForm<LoginFields>({
  validationSchema: loginSchema
})

const handleLogin = handleSubmit(async (values) => {
  try {
    await request.get('/sanctum/csrf-cookie')
    const { data } = await request.post('/api/login', values)
    user.value = data
    router.push('/profile')
  } catch (error) {
    const errorResponse = error as ErrorResponse
    serverError.value = errorResponse.response.data.message
  }
})
</script>

<template>
  <AuthLayout :submitHandler="handleLogin" :serverError="serverError">
    <FormField name="email" type="email" placeholder="Email" />
    <FormField name="password" type="password" placeholder="Password" />
    <SubmitButton content="Log in" />
    <RouterLink to="/register" class="text-fadedPrimary underline">Register</RouterLink>
  </AuthLayout>
</template>
