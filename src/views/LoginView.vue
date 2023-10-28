<script setup lang="ts">
import { Form } from 'vee-validate'
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import logo from '/public/favicon.svg'
import { loginSchema } from '@/schemas/Auth'
</script>

<template>
  <Form
    @submit="() => console.log('yay')"
    :validation-schema="loginSchema"
    class="flex flex-col items-center justify-center gap-3 bg-white rounded-md px-20 py-32 max-w-[400px] h-[450px] shadow-lg"
  >
    <img :src="logo" class="w-[50px] mb-10" />
    <FormField name="email" type="email" placeholder="Email" />
    <FormField name="password" type="password" placeholder="Password" />
    <SubmitButton content="Log in" />
    <RouterLink to="/register" class="text-fadedPrimary underline">Register</RouterLink>
  </Form>
</template>
