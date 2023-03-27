import {BsCart2, } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import {MdOutlinePayments } from 'react-icons/md'
import logoDark from '../assets/bazzar-logo-dark.png'

function Header() {
  const productData = useSelector(state => state.bazzar.productData)
  const userInfo = useSelector((state)=> state.bazzar.userInfo)
  console.log(userInfo)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between mr-5'>
          <Link to="/">
            <div>
            <img className='w-28 m-3' src={logoDark} alt='logoDark' />
            </div>
          </Link>
            <div className='flex items-center gap-8 m-3'>
            <ul className='flex items-center gap-8 m-3'>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            </ul>
            <Link to="/cart">
              <div className='relative'>
              <BsCart2 className='cart'/>
              <span className='absolute w-4 top-0 left-1.5 bottom-0.5 text-xs flex items-center jsutify-center font-semibold font-titleFont'>{productData.length}</span>
              </div>
            </Link>
            <Link to="/login">
            <img className='w-8 h-8 rounded-full border border-black' src={
              userInfo ? userInfo.image :'https://acousticguitar.com/wp-content/uploads/2015/11/guitar-outside.jpg'
            }
                  alt="avatar" />
            </Link>
            {
              userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
            }
        </div>
        </div>
    </div>
  )
}

export default Header
