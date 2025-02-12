import {useQuery} from '@tanstack/react-query';
import tourApi from '../../utills/tourApi';

const getDetailCommon = async({queryKey}) => {
  const [, contentId] = queryKey;
  return await tourApi.get('/detailCommon', {
    params : {
      contentId,
      defaultYN : "Y",
      firstImageYN : "Y",
      addrinfoYN : "Y",
      overviewYN : "Y",
    }
  })
}

export const useGetDetailCommonQuery = (contentId) => {
  return useQuery({
    queryKey : ["getDetailCommon", contentId],
    queryFn : getDetailCommon,
    select : (result) => result.data.response.body.items.item[0],
  })
}

