/**
 * Genarate common requestor
 * Author: viethoavnm
 */
import Axios from 'axios';
import jsCookie from 'js-cookie';
import { BASE_URL, TOKEN_KEY } from 'consts';

function getToken() {
  return jsCookie.get(TOKEN_KEY) ? ("Bearer " + jsCookie.get(TOKEN_KEY)) : undefined;
}

const services = Axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})
addInterceptors(services)

/**
 * Genarate interceptors for axios instantce
 */
function addInterceptors(instance) {
  instance.interceptors.request.use(
    config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(function (response) {
    try {
      if (response.config.noAuth) {
        return response.data
      }
      if (response.data.value) {
        return response.data.value
      }
      return Promise.reject()
    } catch (error) {
      return Promise.reject(error)
    }
  }, function (error) {
    return Promise.reject(error)
  })
}

/**
 * 
 */
export default services;