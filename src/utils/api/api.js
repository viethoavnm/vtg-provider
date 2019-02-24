const api = (axios) => ({
  /**API : COMMON */
  getSetting: (name) => {
    return axios.get(`api/setting/get-by-name`, { params: { name } })
      .then(({ value }) => (value ? value : "{}"));
  },
  getMyHotel: (params) => {
    return axios.get('api/hotel/get-list-by-provider', { params });
  },
  getHotelDetail: (id) => {
    return axios.get(`api/hotel/get-by-id/${id}`);
  },
  getCountries: () => {
    return axios.get('api/country/get-all');
  },
  getProvincesBrief: (params) => {
    return axios.get('api/province/get-all-brf', { params });
  },
  createHotel: (data) => {
    return axios.post('api/hotel/', data);
  },
  updateHotel: (data) => {
    return axios.put('api/hotel/', data);
  }
})

export default api;