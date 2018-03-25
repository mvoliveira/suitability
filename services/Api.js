import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: `https://dev-api.oiwarren.com/api/v2/`
  })
}
