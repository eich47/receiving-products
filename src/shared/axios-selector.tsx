import axios from 'axios'
import {BASE_URL_FIREBASE} from '../api_const/const'

export default axios.create({
  baseURL: BASE_URL_FIREBASE,
})
