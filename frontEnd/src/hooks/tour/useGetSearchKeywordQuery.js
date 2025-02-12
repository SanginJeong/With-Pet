import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getSearchKeyword = async({queryKey}) => {
  const [, params] = queryKey;
  return tourApi.get('/searchKeyword', {
    params,
  })
}

export const useGetSearchKeywordQuery = (params, enabled) => {
  return useQuery({
    queryKey : ["getSearchKeyword", params],
    queryFn : getSearchKeyword,
    select: (result) => result.data.response.body.items.item,
    enabled,
  })
}