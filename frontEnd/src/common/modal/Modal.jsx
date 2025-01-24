import React from 'react'

const Modal = ({children}) => {
  return (
      <div className='w-full h-full bg-modalOverlay fixed inset-0 flex justify-center items-center z-[1000]'>
        <div className='w-[90%] max-w-[500px] bg-white rounded-lg p-5 shadow-lg relative animate-[modal-show_0.3s_ease-out] '>
          {children}
        </div>
      </div>   
  )
}

Modal.header = ({children}) => {
  return <div className='text-[24px] text-center text-blue-400'>{children}</div>
}

Modal.content = ({children}) => {
  return <div>{children}</div>
}


export default Modal