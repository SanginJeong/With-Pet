import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useGetDetailCommonQuery } from '../../hooks/tour/useGetDetailCommonQuery';
import BasicInfo from './detailTables/BasicInfo';
import Instruction from './detailTables/Instruction';
import PetInfo from './detailTables/PetInfo';

const SearchDetailPage = () => {
  const {contentTypeId, contentId} = useParams();
  const {data: detailCommon} = useGetDetailCommonQuery(contentId);
  const [selected, setSelected] = useState("기본정보");
  const btnList = ["기본정보", "이용안내", "반려동물정보"];

  return (
    <div>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <div className='flex-[3]'>
          <img src={detailCommon?.firstimage} />
        </div>
        <div className='flex-[7]'>
          <p className='font-bold text-[18px] h-1/4'>{detailCommon?.title}</p>
          <p className='h-3/4 overflow-y-scroll'>{detailCommon?.overview}</p>
        </div> 
      </div>

      <div className='flex justify-around border border-2 rounded-xl p-2 my-4'>
        {btnList.map((buttonText)=>(
          <button
            onClick={()=>setSelected(buttonText)}
            className={`relative py-2 text-gray-700 font-semibold border-none sm:px-14`}>
              <span>{buttonText}</span>
              {selected === buttonText && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 ease-in-out"/>
              )}
          </button>
        ))}
      </div>
      <div className='my-4 max-h-[300px] overflow-y-scroll'>
        {selected === "기본정보" && <BasicInfo data={detailCommon}/>}
        {selected === "이용안내" && <Instruction contentTypeId = {contentTypeId} contentId={contentId}/>}
        {selected === "반려동물정보" && <PetInfo contentId={contentId}/>}
      </div>
    </div>
  )
}

export default SearchDetailPage