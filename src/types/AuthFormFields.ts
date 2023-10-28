export interface LoginFields {
  email: string
  password: string
}

export interface RegistrationFields extends LoginFields {
  username: string
  password_confirm: string
  birthdate: Date
}
