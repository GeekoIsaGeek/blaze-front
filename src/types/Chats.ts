export type ChatPreview = {
  photo: string
  name: string
  message: string
  user_id: number
}

export type Message = {
  sender_id: number
  receiver_id: number
  message: string
  id: number
}
