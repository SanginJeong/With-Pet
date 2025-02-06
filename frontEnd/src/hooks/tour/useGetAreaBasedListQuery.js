// 반려 동물 동반여행지의 지역 및 시군구를 기반으로 관광정보 목록을 조회하는 기능입니다.
// 파라미터에 따라 제목순, 수정일순(최신순), 등록일순 정렬검색을 제공합니다.

import { useQuery } from "@tanstack/react-query";
import tourApi from "../../utills/tourApi";

const getAreaBasedList = async({queryKey}) => {
  const [, params] = queryKey;
  return await tourApi.get('/areaBasedList',{
    params,
  })
}

export const useGetAreaBasedListQuery = ({arrange, contentTypeId, areaCode, sigunguCode, cat1, cat2, cat3}) => {
  return useQuery({
    queryKey: ["getAreaBasedList", {arrange, contentTypeId, areaCode, sigunguCode, cat1, cat2, cat3}],
    queryFn: getAreaBasedList,
    select: (result) => result.data,
  })
}