import React from 'react'
import Modal from '../../../common/modal/Modal'
import { useModalStore } from '../../../store/useModalStore'
import {useGetCategoryCodeQuery} from '../../../hooks/tour/useGetCategoryCodeQuery';
import { useSearchStore } from '../../../store/uesSearchStore';

const ServiceDivideModal = () => {
  const {closeModal} = useModalStore();
  const {selectedContentType,cat1, cat2, cat3, setCat1, setCat2, setCat3} = useSearchStore();
  // 대분류
  const {data: categoryCode} = useGetCategoryCodeQuery({cat1:"", cat2: "", cat3:"", contentTypeId : selectedContentType.id});

  const handleCat1 = (item) => {
    setCat1(item);
    setCat2({code: "", name: ""});
  }

  const handleCat2 = (item) => {
    setCat2(item);
    setCat3({code: "", name: ""});
  }

  const handleCat3 = (item) => {
    setCat3(item);
  }

  const {data: subCategoryCode} = useGetCategoryCodeQuery(
    {cat1 : cat1.code},
    {enabled : !!cat1}
  )

  const {data: subSubCategoryCode} = useGetCategoryCodeQuery(
    {cat1 : cat1.code, cat2: cat2.code},
    {enabled : !!cat1 && !!cat2},
  )  
  return (
    <>
      <Modal>
        <Modal.header>서비스분류</Modal.header>
        <Modal.content>
          <div className='flex text-center h-[30rem] overflow-y-scroll'>
            <div className='w-1/3'>
              <div className='my-4 font-bold'>대분류</div>
                {categoryCode?.map((item)=>(
                  <div>
                    <button onClick={()=>handleCat1(item)} 
                      className={`${item.name === cat1.name ? "bg-blue-600 text-white" : ""} my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md w-[100px] sm:w-32`}>
                      {item.name}
                    </button>
                  </div>
                ))}
            </div>
            <div className='w-1/3'>
              <div className='my-4 font-bold'>중분류</div>
                {cat1.code && subCategoryCode?.map((item)=>(
                  <div>
                    <button 
                      onClick={()=>handleCat2(item)}
                      className={`${item.name === cat2.name ? "bg-blue-600 text-white" : ""} my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md w-[100px] sm:w-32`}>
                      {item.name}
                    </button>
                  </div>
                ))}
            </div>
            <div className='w-1/3'>
              <div className='my-4 font-bold'>소분류</div>
                {cat2.code && subSubCategoryCode?.map((item)=>(
                    <div>
                      <button 
                        onClick={()=>handleCat3(item)}
                        className={`${item.name === cat3.name ? "bg-blue-600 text-white" : ""} my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md w-[100px] sm:w-32`}>
                        {item.name}
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          <div className='flex justify-center gap-4'>
            <button type='button' onClick={()=>closeModal("service")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>완료</button>
            <button type='button' onClick={()=>closeModal("service")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>취소</button>
          </div>
        </Modal.content>
      </Modal>
    </>
  )
}

export default ServiceDivideModal