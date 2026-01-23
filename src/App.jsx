import { useState } from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import './App.css'
import AdditionalFeatures from './Components/AdditionalFeatures';
import Pricing from './Components/Pricing';
import Footers from './Components/Footers';

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <AdditionalFeatures/>
      <Pricing/>
      <Footers/>
    </>
  )
}

export default App
