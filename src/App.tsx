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
import { useState } from 'react'

function App() { 
  // Keep track of the current page, using home as the default
  const [currentCardContent, setCurrentCardContent] = useState('home')

  // Handle page changes
  let cardContent;
  switch (currentCardContent) {
    case 'home':
      cardContent = <Home />
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
      cardContent = <Home />
      break;
  }
  
  // Return the page
  return ( 
    <div className="min-h-screen"> 
      <LineBackground /> 
      <Navbar /> 
      <div className="fixed top-1/2 left-[5vw] -translate-y-1/2 w-[250px]"> 
        <Sidebar setCurrentCardContent={setCurrentCardContent} /> 
        </div> 
        <div className="ml-[30vw] mr-[5vw] mt-[10vh] pb-10"> 
            <DisplayCard children={cardContent} /> 
        </div> 
    </div> 
  )
}

export default App