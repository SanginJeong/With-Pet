import {useQuery} from '@tanstack/react-query';
import tourApi from '../../utills/tourApi';

const getSiGunGu = async (areaCode) => {
  return await tourApi.get('/areaCode', {
    params : {
      areaCode : areaCode,
    }
  })
}

export const useGetSiGunGuCodeQuery = (areaCode) => {
  return useQuery({
    queryKey : ["getSiGunGu", areaCode],
    queryFn : () => getSiGunGu(areaCode),
    enabled: !!areaCode,
    select : (result) => result.data.response.body.items.item,
  })
}