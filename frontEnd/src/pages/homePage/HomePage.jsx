import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='flex justify-center p-8'>
        <form className='w-64'>
          <input placeholder='검색어를 입력하세요' type="text" className='w-full p-2 border-b-[1px] border-black focus:rounded-[12px]' />
        </form>
      </div>
    </>
  )
}

export default HomePage