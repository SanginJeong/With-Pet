import React from 'react'
import Modal from '../../../common/modal/Modal'
import { useModalStore } from '../../../store/useModalStore'
import { useGetAreaCodeQuery } from '../../../hooks/tour/useGetAreaCodeQuery';
import { useGetSiGunGuCodeQuery } from '../../../hooks/tour/useGetSigunguCodeQuery';
import { useSearchStore } from '../../../store/uesSearchStore';

const RegionModal = () => {
  const {closeModal} = useModalStore();
  const {data: areaCode} = useGetAreaCodeQuery();
  const {selectedRegion, selectedSigungu ,setSelectedRegion, setSelectedSigungu} = useSearchStore();
  const {data: sigunguCode} = useGetSiGunGuCodeQuery(selectedRegion.code);

  return (
    <>
      <Modal>
        <Modal.header>지역</Modal.header>
        <Modal.content>
          <div className='flex gap-4 my-4'>
            <div className='w-1/2'>
              <div className='overflow-y-scroll h-[25rem]'>
                <div>
                  <button 
                    onClick={()=>setSelectedRegion({code: "", name: "전국"})}
                    className={`${selectedRegion.name === "전국" ? "bg-blue-600 text-white" : ""} w-full my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md`}>전국</button></div>
                <div className='grid grid-cols-2'>
                  {areaCode?.map((area)=>(
                    <button 
                      onClick={()=>setSelectedRegion({code: area.code, name: area.name})}
                      className={`${selectedRegion.name === area.name ? "bg-blue-600 text-white" : ""} my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md`}>{area.name}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='overflow-y-scroll h-[25rem]'>
                <div>
                  <button 
                    onClick={()=>setSelectedSigungu({code: "", name: "전체"})}
                    className={`${selectedSigungu.name === "전체" ? "bg-blue-600 text-white" : ""} w-full my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md`}>전체</button></div>
                <div className='grid grid-cols-2'>
                  {sigunguCode?.map((sigungu)=>(
                    <button 
                      onClick={()=>setSelectedSigungu({code: sigungu.code, name: sigungu.name})}
                      className={`${selectedSigungu.name === sigungu.name ? "bg-blue-600 text-white" : ""} my-1 border-2 hover:bg-blue-600 hover:text-white transition p-2 rounded-md`}>{sigungu.name}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

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