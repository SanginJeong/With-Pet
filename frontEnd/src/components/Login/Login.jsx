import React from 'react'
import Modal from '../../common/modal/Modal'
import { useModalStore } from '../../store/useModalStore'
import { Link } from 'react-router'
const Login = () => {
  const {closeModal} = useModalStore((state)=>state.login);
  return (
    <>
      <Modal>
        <Modal.header>로그인</Modal.header>
        <Modal.content>
          <form className='flex flex-col'>
            <input className='p-2 my-4 border-[1px] border-blue-400 transition-all' placeholder='아이디를 입력하세요' type="text" />
            <input className='p-2 my-4 border-[1px] border-blue-400 transition-all' placeholder='비밀번호를 입력하세요' type="text" />
            <div className='flex justify-center items-center'>
              <Link 
                to='/home/signup' 
                className='flex items-center text-blue-400 gap-2 p-2'
                onClick={closeModal}>
                  <p>회원가입 하러 가기</p>
                  <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            {/* 에러텍스트 */}
            <button type='submit' className='p-1 my-1 text-white bg-blue-400 hover:bg-blue-600'>완료</button>
            <button type='button' onClick={closeModal} className='p-1 my-1 text-white bg-blue-400 hover:bg-blue-600'>취소</button>
          </form>
        </Modal.content>
      </Modal>
    </>
  )
}

export default Login