import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import DisplayCard from './components/DisplayCard'
import LineBackground from './components/LineBackground'

function App() {
  return (
    <>
      <LineBackground />
      <Navbar />
      <div className="flex gap-6 mt-6 ml-[5vw] mr-[5vw] justify-between">
        <SideBar />
        <DisplayCard />
      </div>
    </>
  )
}

export default App
