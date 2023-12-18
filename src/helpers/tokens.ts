export const setToken = (key: string, token: string) => {
  if (key && token) {
    localStorage.setItem(key, JSON.stringify(token))
  }
}

export const getToken = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const removeToken = (key: string) => {
  localStorage.removeItem(key)
}
