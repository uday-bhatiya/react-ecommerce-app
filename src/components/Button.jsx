import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';

const Button = ({icon, className}) => {
  return (
    <div className={`${className} flex items-center justify-center cursor-pointer`}>
      <CiShoppingCart/>
    </div>
  )
}

export default Button
