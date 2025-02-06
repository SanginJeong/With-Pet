import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getCategoryCode = async({queryKey}) => {
  const [, params] = queryKey;
  return await tourApi.get('/categoryCode',{
    params,
  })
}

export const useGetCategoryCodeQuery = ({cat1,cat2,cat3}) => {
  return useQuery({
    queryKey: ["getCategoryCode", {cat1,cat2,cat3}],
    queryFn: getCategoryCode,
    select: (result) => result.data.response.body.items.item,
  })
}