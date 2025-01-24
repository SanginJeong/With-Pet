import axios from 'axios';
const API_KEY = import.meta.env.VITE_PET_TOUR_SERVICE_KEY

const tourApi = axios.create({
  baseURL:`http://apis.data.go.kr/B551011/KorPetTourService`,
  headers: {
    Accept: 'application/json'
  },
  params: {
    serviceKey: API_KEY,
    MobileOS: 'AND',
    MobileApp: 'test',
    _type: 'json',
  },
})

export default tourApi;