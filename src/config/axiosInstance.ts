import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5173'
  }
})
request.defaults.withCredentials = true

export default request
