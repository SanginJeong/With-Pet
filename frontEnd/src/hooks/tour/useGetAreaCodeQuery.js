import {useQuery} from '@tanstack/react-query';
import tourApi from '../../utills/tourApi';

const getAreaCode = async() => {
  return await tourApi.get('/areaCode');
}

export const useGetAreaCodeQuery = () => {
  return useQuery({
    queryKey: ["getAreaCode"],
    queryFn: getAreaCode,
    select: (result) => result.data.response.body.items.item,
  })
}