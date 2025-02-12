import React, { useState } from 'react'
import { useSearchStore } from '../../../store/uesSearchStore';
import { useModalStore } from '../../../store/useModalStore';
import { useQueryClient } from '@tanstack/react-query';
import Table from '../../../common/table/Table';
const SearchTable = () => {
  const {inputValue, setInputValue ,setSearchTerm, setIsSearching ,cat1,cat2,cat3, setCat2, setCat3, setCat1 ,selectedContentType, setSelectedContentType, setSelectedRegion, selectedRegion, selectedSigungu, setSelectedSigungu} = useSearchStore();
  const {openModal} = useModalStore();
  const queryClient = useQueryClient();
  const submitSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setIsSearching(true);
  }
  
  const handleReset = () => {
    setSearchTerm("");
    setInputValue("");
    setSelectedContentType({id: "",name:"전체"});
    setSelectedRegion({code:"", name:"전국"});
    setSelectedSigungu({code:"", name:"전체"});
    setCat1({code:"", name:""});
    setCat2({code:"", name:""});
    setCat3({code:"", name:""});
    setIsSearching(false);
    queryClient.removeQueries(["getAreaBasedList"])
  }



  return (
    <div className="p-4">
      <h3 className="py-4 font-bold text-2xl text-center text-white bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg shadow-lg mb-8">
        궁금한 관광정보를 검색해보세요
      </h3>
      <Table>
        <tr>
          <Table.th width={"w-[25%] sm:w-1/5"}>관광타입</Table.th>
          <Table.td width={"w-[35%] sm:w-3/5"}>{selectedContentType.name}</Table.td>
          <Table.td width={"w-[40%] sm:w-1/5"}><button onClick={()=>{openModal("contentType")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>관광타입 선택</button></Table.td>
        </tr>
        <tr>
          <Table.th>서비스 분류</Table.th>
          <Table.td>{cat1.name} {cat2.name} {cat3.name}</Table.td>
          <Table.td><button onClick={()=>{openModal("service")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>서비스분류 선택</button></Table.td>
        </tr>
        <tr>
          <Table.th>지역</Table.th>
          <Table.td>{selectedRegion.name}  {selectedSigungu.name}</Table.td>
          <Table.td><button onClick={()=>{openModal("region")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>지역 선택</button></Table.td>
        </tr>
        <tr>
          <Table.th>검색어</Table.th>
          <Table.td colSpan={2}>
            <form onSubmit={submitSearchTerm} className='flex flex-col gap-4 sm:flex-row'>
              <input 
                className="w-full sm:w-[70%] border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="text"
                onChange={(e)=>{setInputValue(e.target.value)}}
                placeholder="검색어를 입력하세요..."
                value={inputValue}
              />
              <div className='flex flex-col gap-2  xl:flex-row'>
                <button type='submit' className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>검색</button>  
                <button onClick={handleReset} type='button' className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>초기화</button>  
              </div>
            </form>
          </Table.td>
        </tr>
      </Table>
    </div>
  )
}

export default SearchTable