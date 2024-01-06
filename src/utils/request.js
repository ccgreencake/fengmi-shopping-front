import axios from 'axios'


// create an axios instance
const service = axios.create({
  baseURL: `http://localhost:8080/`, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
      config.headers.token = localStorage.getItem("token");
    return config
  }
)
import router from '@/router/index.js'
// response interceptor
service.interceptors.response.use(
  response => {
      if (response.data.code == 403){
          localStorage.removeItem("token");
          router.push('/login')
      }
    return response.data
  }
)

export default service
