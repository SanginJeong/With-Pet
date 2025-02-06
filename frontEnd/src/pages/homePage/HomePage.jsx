import React, { useEffect } from 'react'
import { contentType } from './contentType'
import Card from '../../common/card/Card'
import Tag from '../../common/tag/Tag'
import SearchForm from './serachForm/SearchForm'
import { useSearchStore } from '../../store/uesSearchStore'

const HomePage = () => {
  const setSearchTerm = useSearchStore((state)=>state.setSearchTerm);
  useEffect(()=>{
    setSearchTerm("");
  },[])
  return (
    <>
      <SearchForm/>
      <Tag/>
    </>
  )
}

export default HomePage