import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { textList } from './text';
const StartPage = () => {
  const [text, setText] = useState(textList["Introduce"]);
  const navigate = useNavigate('');
  const onStart = () => {
    navigate('/home');
  }
  const onClickMenu = (e) => {
    const {textContent} = e.target;
    setText(textList[textContent]);
  }
  return (
    <div className="bg-[url('/images/high.avif')] h-[100%] bg-cover bg-no-repeat bg-opacity-50">
      {/* overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='flex items-center w-[100%] h-[100%]'>
        <div className='flex-[4] text-white relative w-[300px]'>
          <h1 className='text-center text-[36px]'>위드펫 WITH:PET</h1>
          <div className='text-center p-4'>
            <button onClick={onStart} className='py-2 px-8 border-[1px] bg-blue-400 hover:bg-blue-600 transition'>시작하기</button>
          </div>
        </div>
        <div className='flex-[6] flex gap-x-4'>
          <div className='flex-[3] flex-col text-white relative flex  border-r-[1px] p-4'>
            <button onClick={onClickMenu} className='py-2 px-8 hover:bg-blue-600 transition m-4'>Introduce</button>
            <button onClick={onClickMenu} className='py-2 px-8 hover:bg-blue-600 transition m-4'>About</button>
          </div>

          <div className='flex-[7] text-white relative py-4 px-8'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage