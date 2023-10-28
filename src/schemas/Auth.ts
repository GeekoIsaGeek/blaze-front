import * as yup from 'yup'

export const registrationSchema = yup.object({
  username: yup.string().required().min(6),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  password_confirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
  birthdate: yup
    .date()
    .required()
    .test('legalAge', 'You must be 18 at least', (value) => {
      const birthdate = new Date(value)
      const today = new Date()
      const age = today.getFullYear() - birthdate.getFullYear()

      return age >= 18
    })
})

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8)
})
