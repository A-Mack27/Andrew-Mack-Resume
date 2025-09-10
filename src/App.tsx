import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DisplayCard from './components/DisplayCard'
import LineBackground from './components/LineBackground'

function App() {
  return (
    <>
      <LineBackground />
      <Navbar />
      <div className="fixed top-1/2 left-[5vw] -translate-y-1/2 w-[250px]">
        <Sidebar />
      </div>
      <div className="flex justify-center items-center  ml-[30vw] mr-[5vw]">
        <DisplayCard />
      </div>
    </>
  )
}

export default App