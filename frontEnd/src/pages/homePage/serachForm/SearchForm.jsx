import React from 'react'
import { useSearchStore } from '../../../store/uesSearchStore'
import { useNavigate } from 'react-router';

const SearchForm = () => {
  const {searchTerm, setSearchTerm} = useSearchStore();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const submitSearchTerm = (e) => {
    e.preventDefault();
    navigate('search');  
  }
  return (
    <form onSubmit={submitSearchTerm} className='flex justify-center'>
      <input 
        placeholder="찾고 싶은 '관광정보'를 입력하세요." 
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className='w-[60%] py-2 px-4 border-[1px] rounded-md border-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none font-bold placeholder-blue-400'
      />
      <button type='submit' className='text-blue-400 relative -left-6'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  )
}

export default SearchForm