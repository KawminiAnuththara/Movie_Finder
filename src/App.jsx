import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/Themes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from './sections/Home'

function App() {
  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
        options={
          {
            smooth:true,
          }
        }
        watch={
          [

          ]
        }
        containerRef={containerRef}
        >
      <main data-scroll-container ref={containerRef}>
        <Home/>
      </main>
      </LocomotiveScrollProvider>
      </ThemeProvider>
      
    </>
  )
}

export default App
