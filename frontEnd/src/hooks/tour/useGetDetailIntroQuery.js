import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getDetailIntro = async({queryKey}) => {
  const [, params] = queryKey;
  return await tourApi.get('/detailIntro', {
    params,
  })
}

export const useGetDetailIntroQuery = (params) => {
  return useQuery({
    queryKey : ["getDetailIntro", params],
    queryFn : getDetailIntro,
    select : (result) => result.data.response.body.items.item[0],
  })
}
