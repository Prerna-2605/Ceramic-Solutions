import react from 'react'
import './App.css'
import Header from './components/Header'
import WhatWeDo from './components/WhatWeDo'
import ChooseUs from './components/ChooseUs'
import Customers from './components/Customers'
import HowItWorks from './components/HowItWorks'
import GetInTouch from './components/GetInTouch'
import Blog from './components/Blog'
import Questions from './components/Questions'
import Services from './components/Services'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Header />
      <WhatWeDo />
      <ChooseUs />
      <Customers />
      <HowItWorks />
      <GetInTouch />
      <Blog />
      <Questions />
      <Services />
      <Footer/>
    </>
  )
}

export default App
