import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getDetailPetTour = async(contentId) => {
  return await tourApi.get('/detailPetTour', {
    params : {
      contentId,
    }
  });
}

export const useGetDetailPetTourQuery = (contentId) => {
  return useQuery({
    queryKey : ["getDetailPetTour"],
    queryFn : ()=>getDetailPetTour(contentId),
    select : (result) => result.data.response.body.items.item[0],
  })
}