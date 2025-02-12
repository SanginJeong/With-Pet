import React from 'react'
import { tagList } from './tagList'
import { useSearchStore } from '../../../store/uesSearchStore';
import { useNavigate } from 'react-router';

const Tag = () => {
  const {setInputValue ,setSearchTerm, setIsSearching} = useSearchStore();
  const navigate = useNavigate();

  const handleTagSearch = (tag) => {
    setSearchTerm(tag.replace('#',""));
    setInputValue(tag.replace('#',""));
    setIsSearching(true);
    navigate('search');
  }

  return (
    <div className='flex justify-center gap-4 p-4 flex-wrap'>
      {tagList.map((tag)=>(
        <button onClick={()=>handleTagSearch(tag)} className='bg-blue-400 text-white px-4 py-1 border-1 rounded-md hover:bg-blue-600 transition'>
          {tag}
        </button>
      ))}
    </div>
  )
}

export default Tag