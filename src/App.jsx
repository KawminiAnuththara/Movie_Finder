import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/Themes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from './sections/Home'
import { AnimatePresence } from 'motion/react'
import About from './sections/About'
import Shop from './sections/Shop'
import Banner from './sections/Banner'
import NewRel from './sections/NewRel'
import Footer from './sections/Footer'
import Loader from './components/Loader'

function App() {
  const containerRef = useRef(null);

  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoaded(true);
    },3000);
  },[])

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
        options={
          {
            smooth:true,
            multiplier: 1, // Adjust scrolling speed
            class: 'is-inview',

            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
          }
        }
        watch={
          [

          ]
        }
        containerRef={containerRef}
        >
        {loaded? null:<Loader/>}
      <AnimatePresence>
      <main className='App' data-scroll-container ref={containerRef}>
        <Home/>
        <About/>
        <Shop/>
        <Banner/>
        <NewRel/>
        <Footer/>
      </main>
      </AnimatePresence>
      </LocomotiveScrollProvider>
      </ThemeProvider>
      
    </>
  )
}

export default App
