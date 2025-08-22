import Top from './Components/Header/Navbar/Top'

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import SubmitArticleHero from './Components/SubmitArticle/Hero/SubmitArticleHero'
import AboutHero from './Components/About/Hero/AboutHero'
import SubmitArticle from './Components/SubmitArticle/SubmitArticle'
function App() {

  return (
    <>
      <Router>
        <Top />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<><AboutHero/><div className='m-5  md:md:ml-13  md:mx-0 mx-3'><div className='w-full'><About /></div></div></>} />
        <Route path='/submit-article' element={<><SubmitArticleHero/><div className='m-5  md:ml-13 mx-3 md:mx-0'><div className='w-full'><SubmitArticle /></div></div></>} />
        </Routes>
      </Router>
    </>
  )
}


export default App