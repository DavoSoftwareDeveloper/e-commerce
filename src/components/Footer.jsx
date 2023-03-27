import logoLight from '../assets/bazzar-logo-light.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'
import { BsPaypal, BsPersonFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'

function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* ============ LogoIcon Start here ============ */}
        <div>
        <img className='w-20 m-3' src={logoLight} alt='logoLight' />
        <p className='m-3 text-white text-sm tracking-wide'>© ReactBD.com</p>
        <img className='w-36 m-3' src="https://cdn.cdnlogo.com/logos/c/55/credit-cards.svg" alt='paymentCards' />
        <div className='flex gap-3 m-3'>
            <FaFacebook/>
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaHome />
        </div>
        </div>
        {/* ============ LocateUs Start here ============ */}
        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
            <div className='text-base flex flex-col gap-2'>
                <p>Mataró, Barcelona</p>
                <p>Mobile: 635200640</p>
                <p>Phone: 666204645</p>
                <p>e-mail: bazzar@gmail.com</p>
            </div>
        </div>    
        {/* ============ Profile Start here ============ */}
        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'> Profile</h2>
            <div className='flex flex-col gap-2 text-base'>
                <p className='flex gap-3 items-center hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><BsPersonFill/></span>my account
                </p>
                <p className='flex gap-3 items-center hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><BsPaypal/></span>checkout
                </p>
                <p className='flex gap-3 items-center hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><FaHome/></span>order tracking
                </p>
                <p className='flex gap-3 items-center hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><MdLocationOn /></span>help & support
                </p>
            </div>     
        </div>
        {/* ============ Subscribe Start here ============ */}
        <div>
            <input 
                type='text' 
                className='bg-transparent border px-4 py-2 text-sm'
                placeholder='e-mail'
            />
            <button className='button'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
