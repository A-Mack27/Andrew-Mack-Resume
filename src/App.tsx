import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DisplayCard from './components/DisplayCard'
import LineBackground from './components/LineBackground'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Demos from './pages/Demos'
import { useState, useEffect } from 'react'

function App() { 
  // Keep track of the current page, using home as the default
  const [currentCardContent, setCurrentCardContent] = useState('home')
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  // Check if user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 // Tailwind's md breakpoint
      if (mobile) {
        setShowMobileWarning(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle page changes
  let cardContent;
  switch (currentCardContent) {
    case 'home':
      cardContent = <Home setCurrentCardContent={setCurrentCardContent} />
      break;
    case 'about':
      cardContent = <About />
      break;
    case 'experience':
      cardContent = <Experience />
      break;
    case 'education':
      cardContent = <Education />
      break;
    case 'gallery':
      cardContent = <Gallery />
      break;
    case 'contact':
      cardContent = <Contact />
      break;
    case 'demos':
      cardContent = <Demos />
      break;
    default:
      cardContent = <Home setCurrentCardContent={setCurrentCardContent} />
      break;
  }
  
  // Return the page
  return ( 
    <div className="min-h-screen"> 
      <LineBackground /> 
      
      {/* Mobile Warning Banner */}
      {showMobileWarning && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#C3423F] text-white p-4 text-center">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex-1">
              <p className="font-semibold text-white">⚠️ Mobile Experience Not Optimized</p>
              <p className="text-sm text-white">This site is best viewed on desktop. Mobile support coming soon!</p>
            </div>
            <button 
              onClick={() => setShowMobileWarning(false)}
              className="ml-4 text-white hover:text-[#FE9920] transition-colors duration-200 text-xl font-bold"
              aria-label="Close warning"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className={`max-h-[5vh] ${showMobileWarning ? 'mt-20' : ''}`}>
        <Navbar setCurrentCardContent={setCurrentCardContent} /> 
      </div>
      <div className="fixed top-1/2 left-[5vw] -translate-y-1/2">
        <Sidebar setCurrentCardContent={setCurrentCardContent} /> 
      </div>
        <div className="ml-[27vw] mr-[5vw] mt-[7.5vh] pb-10"> 
            <DisplayCard children={cardContent} /> 
        </div> 
    </div> 
  )
}

export default App