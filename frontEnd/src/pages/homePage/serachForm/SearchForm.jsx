import React from 'react'
import { useSearchStore } from '../../../store/uesSearchStore'
import { useNavigate } from 'react-router';

const SearchForm = () => {
  const {setIsSearching,setSearchTerm, inputValue ,setInputValue} = useSearchStore();
  const navigate = useNavigate();
  
  const submitSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);  
    setIsSearching(true);
    navigate('search');
  }
  return (
    <form onSubmit={submitSearchTerm} className='flex justify-center'>
      <input 
        placeholder="찾고 싶은 '관광정보'를 입력하세요." 
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        className='w-[90%] py-2 px-4 border-[1px] rounded-md border-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none font-bold placeholder-blue-400 
          sm:w-[60%] '
      />
      <button type='submit' className='text-blue-400 relative -left-6'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  )
}

export default SearchForm