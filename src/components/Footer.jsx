import React from 'react'
import { logo,Footer1, Footer2, Footer3 } from '../assests'
import { Link} from 'react-router-dom'

const Footer = () => {
    return (
      <footer className='w-full h-[300px] px-10 min-h-min flex flex-col justify-between pt-5'>
  
        <div className='2xl:max-w-[1280px] mx-auto flex items-start gap-[7rem] flex-wrap'>
          <div>
            <img className='w-[150px] pb-2' src={logo} alt="logo" />
            <h3 className='font-[600] text-[17px] py-2'>Contact</h3>
            <h4 className='text-[13px]'><span className='font-[600]'>Address</span>:562 Wellington Road, Street 32, San Francisco</h4>
            <h4 className='text-[13px]'><span className='font-[600]'>Contact</span>:562 Wellington Road, Street 32, San Francisco</h4>
            <h4 className='text-[13px]'><span className='font-[600]'>Time</span>:562 Wellington Road, Street 32, San Francisco</h4>
          </div>
  
          <div>
            <h3 className='font-[600] text-[17px] py-2'>About</h3>
            <h4 className='text-[13px]'><Link>About Us</Link></h4>
            <h4 className='text-[13px]'><Link>Delivery Infomation</Link></h4>
            <h4 className='text-[13px]'><Link>Privacy Policy</Link></h4>
            <h4 className='text-[13px]'><Link>Terms & Conditions</Link></h4>
            <h4 className='text-[13px]'><Link>Contact Us</Link></h4>
          </div>
  
          <div>
            <h3 className='font-[600] text-[17px] py-2'>My Account</h3>
            <h4 className='text-[13px]'><Link>Sign In</Link></h4>
            <h4 className='text-[13px]'><Link>View Cart</Link></h4>
            <h4 className='text-[13px]'><Link>My Washlist</Link></h4>
            <h4 className='text-[13px]'><Link>Track My Order</Link></h4>
            <h4 className='text-[13px]'><Link>Help</Link></h4>
          </div>
  
          <div>
            <h3 className='font-[600] text-[17px] py-2'>Install App</h3>
            <span className='text-[13px]'>From App Store Or Google Play Store</span>
            <div className='flex my-3'>
              <img src={Footer1} className='border mr-1 rounded-[10px]'  alt="AppStore" />
              <img src={Footer3} className='border rounded-[10px]'   alt="PlayStore" />
            </div>
            <span className='text-[13px]'>Secured Payment Gateaway</span>
            <img src={Footer2} className='my-3' alt="Payment" />
          </div>
  
        </div>
  
        <div className='text-center text-[15px] py-4'>©Copyrights || All Rights Reserved</div>
      </footer>
    )
  }
  

export default Footer
