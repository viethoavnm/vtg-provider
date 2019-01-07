const api = (axios) => ({
  /**API : COMMON */
  getSetting: (name) => {
    return axios.get(`api/setting/get-by-name`, { params: { name } })
      .then(({ value }) => (value ? value : "{}"));
  },
})


export default api;