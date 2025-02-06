import React from 'react'
import { useSearchStore } from '../../../store/uesSearchStore';
import { useModalStore } from '../../../store/useModalStore';
const SearchTable = () => {
  const {searchTerm, setSearchTerm, cat1,cat2,cat3, setCat2, setCat3, setCat1 ,selectedContentType, setSelectedContentType, setSelectedRegion, selectedRegion} = useSearchStore();
  const {openModal} = useModalStore();

  const handleReset = () => {
    setSearchTerm("");
    setSelectedContentType("전체");
    setSelectedRegion("전국");
    setCat1({code:"", name:""});
    setCat2({code:"", name:""});
    setCat3({code:"", name:""});
    
  }
  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <tr>
          <th className="w-1/4 p-3 border border-black-300 text-center bg-gray-300">관광타입</th>
          <td className="w-2/4 p-3 border border-gray-300 text-center">{selectedContentType}</td>
          <td className="w-1/4 p-3 border border-gray-300 text-center">
            <button onClick={()=>{openModal("contentType")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>관광타입 선택</button>
          </td>
        </tr>
        <tr>
          <th className="p-3 border border-black-300 text-center bg-gray-300">서비스 분류</th>
          <td className="p-3 border border-gray-300 text-center">{cat1.name} {cat2.name} {cat3.name}</td>
          <td className="p-3 border border-gray-300 text-center">
            <button onClick={()=>{openModal("service")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>서비스분류 선택</button>
          </td>
        </tr>
        <tr>
          <th className="p-3 border border-black-300 text-center bg-gray-300">지역</th>
          <td className="p-3 border border-gray-300 text-center">{selectedRegion}</td>
          <td className="p-3 border border-gray-300 text-center">
            <button onClick={()=>{openModal("region")}} className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>지역 선택</button>
          </td>
        </tr>
        <tr>
          <th className="p-3 border border-black-300 text-center bg-gray-300">검색어</th>
          <td className="p-3" colSpan={2}>
            <form className='flex gap-4 items-center'>
              <input 
                className="w-[75%] border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="text"
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                placeholder="검색어를 입력하세요..."
                value={searchTerm}
              />
              <button type='submit' className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>검색</button>  
              <button onClick={handleReset} type='button' className='bg-blue-400 py-1 px-2 text-white rounded-md hover:bg-blue-600 transition'>선택 초기화</button>  
            </form>
          </td>
        </tr>  
      </table>
    </div>
  )
}

export default SearchTable