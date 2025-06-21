import react from 'react'
import './App.css'
import Header from './components/Header'
import WhatWeDo from './components/WhatWeDo'
import ChooseUs from './components/ChooseUs'
import Customers from './components/Customers'
import HowItWorks from './components/HowItWorks'
import GetInTouch from './components/GetInTouch'
import Blog from './components/Blog'

function App() {

  return (
    <>
      <Header />
      <WhatWeDo />
      <ChooseUs />
      <Customers />
      <HowItWorks />
      <GetInTouch />
      <Blog/>
    </>
  )
}

export default App
