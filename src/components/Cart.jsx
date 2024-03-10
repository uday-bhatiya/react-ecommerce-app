import React, { useState } from 'react'
import { Banners } from '../constant'
import Banner from './Banner'
import { useSelector, useDispatch } from 'react-redux'
import {removeToCart} from '../features/cart/cartSlice'

const Cart = () => {

    const cartItem = useSelector(state => state.cart.items)

    const dispatch = useDispatch()

    const handleRemoveItem = (item) => {
      dispatch(removeToCart(item))
    }
    const [itemQuantities, setItemQuantities] = useState(
      cartItem.reduce((acc, item) => {
        acc[item.id] = 1; 
        return acc;
      }, {})
    );
  
    const handleQuantityChange = (id, newQuantity) => {
      
      setItemQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: newQuantity
      }));
    };

  return (
    <main className='w-full h-full'>
       <Banner banner={"contactBanner"} bannerDetails={Banners.cartBanner} />
       <section className='2xl:max-w-[1280px]  md:px-10  mx-auto my-4  w-full h-min px-2'>
       {cartItem.map((item,index) => (

        <div key={index} className="flex items-center border-b py-2">
        <img src={item.image} alt='' className="w-16 h-16 object-cover mr-4" />
        <div className="flex-1">
          <h2 className="text-sm font-semibold">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            value={itemQuantities[item.id]}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}

            className="w-12 h-8 text-center border rounded-md"
          />
          <button onClick={() => handleRemoveItem(item.id)} className="ml-4 text-red-500">
            Remove
          </button>
        </div>
        <p className="ml-4">${item.price * itemQuantities[item.id]}</p>
      </div>

       ))}
       </section>
    </main>
  )
}

export default Cart
