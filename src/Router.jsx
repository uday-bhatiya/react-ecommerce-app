import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero,About,Blog,Contact,Shop} from './pages'
import { Cart } from './components'


const Router = () => {
  return (
    <React.Suspense fallback={<>Loading</>}>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </React.Suspense>
  )
}

export default Router
