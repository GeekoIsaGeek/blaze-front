<script setup lang="ts">
import { Form } from 'vee-validate'
import FormField from '@/components/UI/FormField.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import logo from '/public/favicon.svg'
import { RouterLink } from 'vue-router'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required().min(6),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  password_confirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
})
</script>

<template>
  <Form
    @submit="() => console.log('yay')"
    :validation-schema="schema"
    class="flex flex-col items-center justify-center gap-3 bg-white rounded-md px-20 py-32 max-w-[400px] shadow-lg"
  >
    <img :src="logo" class="w-[50px] mb-10" />
    <FormField name="username" type="text" placeholder="Username" />
    <FormField name="email" type="email" placeholder="Email" />
    <FormField name="password" type="password" placeholder="Password" />
    <FormField name="password_confirm" type="password" placeholder="Confirm Password" />
    <SubmitButton content="Register" />
    <RouterLink to="/login" class="text-fadedPrimary underline">Log in</RouterLink>
  </Form>
</template>
