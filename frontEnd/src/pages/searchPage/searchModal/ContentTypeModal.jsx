import React from 'react'
import { useModalStore } from '../../../store/useModalStore'
import Modal from '../../../common/modal/Modal'
import { useSearchStore } from '../../../store/uesSearchStore'
import {contentType} from '../../homePage/contentType';
const ContentTypeModal = () => {
  const {selectedContentType, setSelectedContentType} = useSearchStore();
  const {closeModal} = useModalStore();
  return (
    <Modal>
      <Modal.header>관광타입 선택</Modal.header>
      <Modal.content>
        <div className='flex flex-col items-center m-4 gap-4 h-[20rem] overflow-y-scroll'>
          <button 
            onClick={()=>{setSelectedContentType({id: "", name: '전체'})}}
            className={`${selectedContentType.name === '전체' ? 'bg-blue-600 text-white' : ""} border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md w-32`}>
              전체
          </button>
          {contentType.map((content)=>(
            <button 
              onClick={()=>{setSelectedContentType({id: content.id, name: content.type})}}
              className={`${content.type === selectedContentType.name ? 'bg-blue-600 text-white' : ""} border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md w-32`}>
              {content.type}
            </button>
          ))}
        </div>
        <div className='flex justify-center gap-4'>
          <button type='button' onClick={()=>closeModal("contentType")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>완료</button>
          <button type='button' onClick={()=>closeModal("contentType")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>취소</button>
        </div>
      </Modal.content>
    </Modal>
  )
}

export default ContentTypeModal