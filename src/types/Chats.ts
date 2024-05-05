export type ChatPreview = {
  photo: string
  name: string
  message: {
    text: string
    sender_id: number
  }
  user_id: number
  chat_id: number
}

export type Message = {
  sender_id: number
  receiver_id: number
  message: string
  id: number
}
