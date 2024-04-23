import { getToken } from '@/helpers/tokens'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import request from './axiosInstance'

window.Pusher = Pusher

export const echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: import.meta.env.VITE_REVERB_PORT,
  wssPort: import.meta.env.VITE_REVERB_PORT,
  forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss'],

  authorizer: (channel: { name: string }) => {
    return {
      authorize: (socketId: string, callback: (par1: boolean, par2: unknown) => void) => {
        request
          .post(
            '/api/broadcasting/auth',
            {
              socket_id: socketId,
              channel_name: channel.name
            },
            {
              headers: {
                Authorization: `Bearer ${getToken('auth')}`
              }
            }
          )
          .then((response) => {
            callback(false, response)
          })
          .catch((error) => {
            callback(true, error)
          })
      }
    }
  }
})
