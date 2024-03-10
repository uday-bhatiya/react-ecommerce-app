import React from 'react'
import Router from './Router'
import { Footer, Header, NewsLatter } from './components'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router/>
      <NewsLatter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

