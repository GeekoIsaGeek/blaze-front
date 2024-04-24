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
