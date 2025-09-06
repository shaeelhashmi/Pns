import Top from './Components/Header/Navbar/Top'

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './Components/About/About'
import SubmitArticleHero from './Components/SubmitArticle/Hero/SubmitArticleHero'
import AboutHero from './Components/About/Hero/AboutHero'
import SubmitArticle from './Components/SubmitArticle/SubmitArticle'
import Footer from './Components/Footer/Footer'
import Page404 from './Components/Page404'
import Home from './Components/Home/Home'
import HomeHero from './Components/Home/HomeHero/HomeHero'
function AppContent() {
  const location = useLocation();
  const hasQuery = location.search.length > 0;

  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={<><HomeHero></HomeHero><div ><Home></Home></div></>} />
        <Route path="/about" element={<>{!hasQuery && <AboutHero/>}<div className='m-5  md:mx-13   mx-3'><div className='w-full'><About /></div></div></>} />
        <Route path='/guidelines' element={<><SubmitArticleHero/><div className='m-5  md:mx-13 mx-3 '><div className='w-full'><SubmitArticle /></div></div></>} />
        <Route path='*' element={<div className='m-5  md:mx-13   mx-3'><Page404 /></div>} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App