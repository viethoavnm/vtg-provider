import axios from './api'

export const getSetting = (name) => {
  return axios.get(`api/setting/get-by-name`, { params: { name } })
    .then(({ value }) => (value ? value : "{}"));
}

export const getMyHotel = (params) => {
  return axios.get('api/hotel/get-list-by-provider', { params });
}

export const getHotelDetail = (id) => {
  return axios.get(`api/hotel/get-by-id/${id}`);
}

export const getCountries = () => {
  return axios.get('api/country/get-all');
}

export const getProvincesBrief = (params) => {
  return axios.get('api/province/get-all-brf', { params });
}

export const createHotel = (data) => {
  return axios.post('api/hotel/', data);
}

export const updateHotel = (data) => {
  return axios.put('api/hotel/', data);
}