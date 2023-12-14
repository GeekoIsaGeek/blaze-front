<script setup lang="ts">
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import logo from '/public/favicon.svg'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from 'vee-validate'
import type { LoginFields } from '@/types/AuthFormFields'
import { loginSchema } from '@/schemas/Auth'

const { handleSubmit } = useForm<LoginFields>({
  validationSchema: loginSchema
})

const handleLogin = handleSubmit(async () => {
  return
})
</script>

<template>
  <AuthLayout :submitHandler="handleLogin">
    <img :src="logo" class="w-[50px] mb-10" />
    <FormField name="email" type="email" placeholder="Email" />
    <FormField name="password" type="password" placeholder="Password" />
    <SubmitButton content="Log in" />
    <RouterLink to="/register" class="text-fadedPrimary underline">Register</RouterLink>
  </AuthLayout>
</template>
