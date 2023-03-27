
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import CartItem from '../components/CartItem'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Cart() {
  const productData = useSelector(state => state.bazzar.productData)
  const userInfo = useSelector((state)=> state.bazzar.userInfo)

  const [totalAmt, setTotalAmt] = useState('')
  const [payNow, setPayNow] = useState(false)

  useEffect(()=>{
    let price = 0
    productData.map(item => {
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price.toFixed(2))
  },[productData])

  const handleCheckOut = () =>{
    if(userInfo){ setPayNow(true)
    } else {
      toast.error("Please sign in to Checkout")
    }
  }
  const payment = async(token)=> {
    await axios.post('http://localhost:8000/pay',{
      amount:totalAmt * 100,
      token: token,
    })
  }

  return (
    <div>
      <img  className='w-full h-60 object-cover' src="https://previews.123rf.com/images/peangdao/peangdao1606/peangdao160600192/58512109-water-in-swimming-pool-blue-water-with-sun-reflection-water-effect-with-sun-reflection-in-swimming.jpg" alt="cartImg"/>
      <div className='flex max-screen-xl mx-auto py-20'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium' >cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{' '}
              <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
            </p>
            <p className='flex itmes-start gap-4 text-base'>
              Shipping{' '}
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            {' '}
            Total <span className='text-xl font-bold'>$ {totalAmt}</span>
          </p>
          <button onClick={handleCheckOut}className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            procced to checkout
          </button>
          {
            payNow && <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout 
                stripeKey='pk_test_51MmK7HIZcMkHbi7FULBu5K4iZ0vdb3cxAZok1HooOOUUQm8kCpt5dC9nHLwgpoNtuKp4AN0WV3RMfq3VCa1hVFiF00YdQtiOOX'
                name='Bazzar Online Shopping'
                amount={totalAmt * 100}
                label='Pay to bazzar'
                description={`Your Payment amount is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          }
        </div>
      </div>
      <ToastContainer 
          position='top-left'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />
    </div>
  )
}

export default Cart
