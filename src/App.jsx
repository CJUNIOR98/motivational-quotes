import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import './App.css'



function App({color}) {

  document.body.style = `background: ${color}`;

  return (
    <div className="App" style={{background: color}}>
      <QuoteBox/>
    </div>
  )
}

export default App
