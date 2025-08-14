import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Nextpage from './Component/Nextpage'
import Sec from './Component/Sec'
import Categories from './Component/Categories'

function App() {

  return (
    <>
      <Home/>
      <Nextpage/>
      <Sec/>
      <Categories/>

    </>
  )
}

export default App
