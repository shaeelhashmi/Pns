import Top from './Components/Header/Navbar/Top'
import Hero from './Components/Header/Hero/Hero'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Top /><Hero />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<></>} />
        </Routes>
      </Router>
    </>
  )
}


export default App