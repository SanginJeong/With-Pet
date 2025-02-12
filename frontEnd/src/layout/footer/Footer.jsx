import React from 'react'
import {Link} from 'react-router';
const Footer = () => {
  return (
    <div className='bg-gray-700 text-white p-4 w-[100%] bottom-[0]'>
      <div className='flex justify-center gap-4 text-[30px]'>
        <Link to='/' className='text-red-600 hover:text-red-800 transition'><i class="fa-brands fa-youtube"></i></Link>
        <Link to='/' className='text-pink-600 hover:text-pink-800 transition'><i class="fa-brands fa-instagram"></i></Link>
        <Link to='/' className='text-blue-600 hover:text-blue-800 transition'><i class="fa-brands fa-facebook"></i></Link>
        <Link to='/' className='text-green-400 hover:text-green-600 transition'><i class="fa-solid fa-blog"></i></Link>
      </div>


      <div className='p-4 flex flex-col sm:flex-row justify-center items-center sm:gap-24'>
        <div className='p-4'>
          <p>상호 : 위드펫 WITH:PET</p>
          <p>본사 : 부산광역시 OO구 OO로 123</p>
          <p>고객센터 : 1234-5678</p>
          <p>E-mail : SanginJeong07@gmail.com</p>
          <p>대표 : JEONG SANG-IN</p>
        </div>

        <div className='p-4'>
          <p className='text-[24px]'>About</p>
          <div className=''>
            <p>Developer : JEONG SANG-IN</p>
            <h3 className='text-[24px]'>API</h3>
            <p>Login : KaKao, Google</p>
            <p>Map : KaKao</p>
            <p>tour data : 한국관광공사</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center p-4'>
          <p>Copyright ⓒ 위드펫 All rights reserved.</p>
        </div>
        <div className='flex justify-center p-2 gap-4 sm:p-4'>
          <Link to='/' className='hover:text-black transition'>개인정보처리방침</Link>
          <Link to='/' className='hover:text-black transition'>이용약관</Link>
          <Link to='/' className='hover:text-black transition'>저작권보호정책</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer