import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getAreaBasedList = async({queryKey}) => {
  const [, params] = queryKey;
  return await tourApi.get('/areaBasedList',{
    params,
  })
}

export const useGetAreaBasedListQuery = (params, enabled) => {
  return useQuery({
    queryKey: ["getAreaBasedList", params],
    queryFn: getAreaBasedList,
    select: (result) => result.data.response.body.items.item,
    enabled,
  })
}