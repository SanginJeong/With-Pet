import axios from 'axios';

const API_KEY = import.meta.env.VITE_PET_TOUR_SERVICE_KEY;

const tourApi = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011/KorPetTourService',
  headers: {
    Accept: 'application/json',
  },
  params: {
    // 필수 파라미터들, 나머지는 요청 때 추가
    serviceKey: API_KEY,
    MobileOS: 'AND',
    MobileApp: 'WITH:PET',
    _type: 'json',
  },
});

export default tourApi;
