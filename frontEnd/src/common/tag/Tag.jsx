import React from 'react'
import { tagList } from './tagList'
import { useSearchStore } from '../../store/uesSearchStore'
import { useNavigate } from 'react-router';

const Tag = () => {
  const setSearchTerm = useSearchStore((state)=>state.setSearchTerm);
  const navigate = useNavigate();

  const handleTagSearch = (tag) => {
    setSearchTerm(tag.replace('#',""))
    navigate('search');
  }

  return (
    <div className='flex justify-center gap-4 p-4'>
      {tagList.map((tag)=>(
        <button onClick={()=>handleTagSearch(tag)} className='bg-blue-400 text-white px-4 py-1 border-1 rounded-md hover:bg-blue-600 transition'>
          {tag}
        </button>
      ))}
    </div>
  )
}

export default Tag