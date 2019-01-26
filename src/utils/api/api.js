const api = (axios) => ({
  /**API : COMMON */
  getSetting: (name) => {
    return axios.get(`api/setting/get-by-name`, { params: { name } })
      .then(({ value }) => (value ? value : "{}"));
  },
  getMyHotel: (params) => {
    return axios.get('api/hotel/get-all', { params });
  }
})


export default api;