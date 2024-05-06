import type { Message } from '@/types/Chats'

export type MatchedEventData = {
  receiverId: number
  likerDetails: {
    id: number
    username: string
    photo: {
      url: string
    }
  }
}

export type MessageProcessedEventData = {
  message: Message
}
