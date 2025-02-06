import React from 'react'
import Modal from '../../../common/modal/Modal'
import { useModalStore } from '../../../store/useModalStore'
import { useGetAreaCodeQuery } from '../../../hooks/tour/useGetAreaCodeQuery';
import { useGetSiGunGuCodeQuery } from '../../../hooks/tour/useGetSigunguCodeQuery';

const RegionModal = () => {
  const {closeModal} = useModalStore();
  const {data: areaCode} = useGetAreaCodeQuery();
  const {data: sigunguCode} = useGetSiGunGuCodeQuery(1);
  console.log(sigunguCode);
  
  return (
    <>
      <Modal>
        <Modal.header>지역</Modal.header>
        <Modal.content>

          <div className='flex justify-center gap-4'>
            <button type='button' onClick={()=>closeModal("region")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>완료</button>
            <button type='button' onClick={()=>closeModal("region")} className='py-2 px-4 transition rounded-md my-1 text-white bg-blue-400 hover:bg-blue-600'>취소</button>
          </div>
        </Modal.content>
      </Modal>
    </>
  )
}

export default RegionModal