import React, { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../constant';
import { logo } from '../assests';
import { CiShoppingCart, CiMenuBurger } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const cartItem = useSelector((state) => state.cart.items);

  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <header className='w-full px-10 py-5 bg-[#E3E6F3] shadow-[0_5px_20px_rgba(0,0,0,0.3)] sticky top-0 z-[100] sm:flex items-center justify-center'>
      <div>
        <img src={logo} alt='logo' className='w-[150px]' />
      </div>

      {menu ? (
        <nav nav className={`2xl:max-w-[1280px] mx-auto h-[50vh] pt-10 sm:pt-0 sm:h-min sm:flex items-center justify-between absolute bg-inherit w-2/4 ${menu ? ' right-0 overflow-y-auto' : 'right-full overflow-hidden'} top-[100%] transition-all ease-in-out`}

        >
          <ul className='flex flex-col sm:flex-row items-center justify-center gap-5 '>
            {Navbar.map((eachLink, index) => (
              <li
                key={index}
                onClick={handleMenuClick}
                className={`font-normal hover:text-[#1C8A7C] ${
                  location.pathname === eachLink.link ? 'active' : ''
                }`}
              >
                <Link to={eachLink.link}>{eachLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className='2xl:max-w-[1280px] mx-auto h-[50vh] pt-10 sm:pt-0 sm:h-min hidden sm:flex items-center justify-between'>
          <ul className='flex flex-col sm:flex-row items-center justify-center gap-5 '>
            {Navbar.map((eachLink, index) => (
              <li
                key={index}
                className={`font-normal hover:text-[#1C8A7C] ${
                  location.pathname === eachLink.link ? 'active' : ''
                }`}
              >
                <Link to={eachLink.link}>{eachLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className='absolute  top-8 right-8 flex items-center justify-center gap-5'>
        <div
          onClick={handleMenuClick}
          className='text-xl hover:text-[#1C8A7C] cursor-pointer relative sm:hidden'
        >
          {menu ? <IoIosCloseCircleOutline /> : <CiMenuBurger />}
        </div>
          <div>
          {cartItem.length !== 0 && (
            <div className='w-3 h-3 bg-red-600 rounded-[50%] absolute -right-2 top-0 flex items-center justify-center text-[6px] text-white font-bold pointer-events-none'>
              {cartItem.length}
            </div>
          )}
        <Link
          className={`hover:text-[#1c8a7c] ${
            location.pathname === '/cart' ? 'active' : ''
          }`}
          to='/cart'
        >
          <CiShoppingCart />
        </Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
