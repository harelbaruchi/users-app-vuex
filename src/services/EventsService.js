/* eslint-disable */
import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/harelbaruchi/UsersMockDB',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
})
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
