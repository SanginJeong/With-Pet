import React from 'react'
import { useSearchStore } from '../../../store/uesSearchStore'
import { useGetSearchKeywordQuery } from '../../../hooks/tour/useGetSearchKeywordQuery';
import { useGetAreaBasedListQuery } from '../../../hooks/tour/useGetAreaBasedListQuery';
import Card from '../../../common/card/Card';
import Spinner from '../../../common/spinner/Spinner';
import { useNavigate } from 'react-router';
const SearchResult = () => {
  const navigate = useNavigate();
  const {isSearching,searchTerm, cat1, cat2, cat3, selectedContentType, selectedRegion, selectedSigungu} = useSearchStore();
  const {data: getByKeyword, isLoading: keywordLoading, isError, error} = useGetSearchKeywordQuery({
    keyword : searchTerm,
    contentTypeId : selectedContentType.id,
    cat1 : cat1.code,
    cat2 : cat2.code,
    cat3 : cat3.code,
    areaCode : selectedRegion.code,
    sigunguCode : selectedSigungu.code,
  }, (isSearching && !!searchTerm));
  
  const {data: getByAreaBasedList, isLoading: areaLoading} = useGetAreaBasedListQuery({
    contentTypeId : selectedContentType.id,
    cat1 : cat1.code,
    cat2 : cat2.code,
    cat3 : cat3.code,
    areaCode : selectedRegion.code,
    sigunguCode : selectedSigungu.code,
  }, (isSearching && !searchTerm))
  
  const moveDetailPage = (item) => {
    navigate(`${item.contenttypeid}/${item.contentid}`);
  }
  

  const result = getByKeyword || getByAreaBasedList;

  if(keywordLoading || areaLoading) {
    return <Spinner/>
  }

  if(!result && isSearching) { // 검색을 했을 때 결과가 없으면
    return  (
    <div className='col-span-4 m-4 text-center text-xl font-semibold bg-pink-400 text-white p-4'>
      검색 결과가 없습니다.
    </div>
  )
  }

  return (
    <div className='grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {result?.map((item)=>(
        <Card onClick={()=>moveDetailPage(item)} className={'text-center border-2 hover:scale-110 transition-transform duration-300 hover:border-blue-600'}>
          <Card.img>
            <img 
              className='w-full h-[25vh] object-cover'
              src={item.firstimage || '/images/NoImage.png'}/>
          </Card.img>
          <Card.title>
            <div className='p-2'>{item.title}</div>
          </Card.title>
        </Card>
      ))}
    </div>
  )
}

export default SearchResult