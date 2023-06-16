import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-code-burguer-production.up.railway.app/'
})

api.interceptors.request.use(config => {
  const userData = localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})
export default api
