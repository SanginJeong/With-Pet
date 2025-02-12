import React, { useEffect } from 'react'
import { contentType } from './contentType'
import Card from '../../common/card/Card'
import Tag from './tag/Tag'
import SearchForm from './serachForm/SearchForm'
import { useSearchStore } from '../../store/uesSearchStore'
import CategorySearchCard from './categorySearchCard/CategorySearchCard'
import UserAddrSearch from './userAddrSearch/UserAddrSearch';
import {useQueryClient} from '@tanstack/react-query';
const HomePage = () => {
  const {setInputValue, setIsSearching ,setSearchTerm, setSelectedContentType} = useSearchStore();
  const queryClient = useQueryClient();
  useEffect(()=>{
    setSearchTerm("");
    setInputValue("");
    setSelectedContentType({id: "", name:"전체"})
    setIsSearching(false);
    queryClient.removeQueries(["getAreaBasedList"]);
  },[])
  
  return (
    <>
      <SearchForm/>
      <Tag/>
      <div className='lg:flex gap-4'>
        <div className='lg:flex lg:flex-1'>
          <CategorySearchCard/>
        </div>
        <div className='lg:flex lg:flex-1'>
          <UserAddrSearch/>
        </div>
      </div>
    </>
  )
}

export default HomePage