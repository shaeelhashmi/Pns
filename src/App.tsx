import Top from './Components/Header/Navbar/Top'
import Hero from './Components/Header/Hero/Hero'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
function App() {

  return (
    <>
      <Router>
        <Top /><Hero />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<div className='m-5  ml-13'><div className='w-full'><About /></div></div>} />
        </Routes>
      </Router>
    </>
  )
}


export default App