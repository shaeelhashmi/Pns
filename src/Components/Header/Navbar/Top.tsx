import { useState, useEffect } from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom'

export default function Top() {
  const [searchTerm, setSearchTerm] = useState('')
  const location =useLocation()
  useEffect(() => {
    // Clear search term when navigating to a new page
    setSearchTerm('')
  }, [location.pathname])

  const handleSearch = (searchValue: string) => {
    const trimmedValue = searchValue.toLowerCase().trim()
    
    // Get all elements with class 'my-7' only in the current page
    const sections = document.querySelectorAll('.my-7')
    
    if (trimmedValue === '') {
      // Remove all highlights if search is empty
      sections.forEach(section => {
        (section as HTMLElement).style.display = ''
        removeHighlight(section as HTMLElement)
      })
      return
    }
    
    sections.forEach(section => {
      const sectionText = section.textContent?.toLowerCase() || ''
      
      if (sectionText.includes(trimmedValue)) {
        (section as HTMLElement).style.display = ''
        highlightText(section as HTMLElement, trimmedValue)
      } else {
        (section as HTMLElement).style.display = 'none'
        removeHighlight(section as HTMLElement)
      }
    })
  }

  const highlightText = (element: HTMLElement, searchTerm: string) => {
    // Remove existing highlights first
    removeHighlight(element)
    
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    )
    
    const textNodes: Text[] = []
    let node
    
    while (node = walker.nextNode()) {
      textNodes.push(node as Text)
    }
    
    textNodes.forEach(textNode => {
      const text = textNode.textContent || ''
      const regex = new RegExp(`(${searchTerm})`, 'gi')
      
      if (regex.test(text)) {
        const highlightedHTML = text.replace(regex, '<mark style="background-color: yellow; padding: 2px;">$1</mark>')
        const wrapper = document.createElement('span')
        wrapper.innerHTML = highlightedHTML
        textNode.parentNode?.replaceChild(wrapper, textNode)
      }
    })
  }

  const removeHighlight = (element: HTMLElement) => {
    const marks = element.querySelectorAll('mark')
    marks.forEach(mark => {
      const parent = mark.parentNode
      parent?.replaceChild(document.createTextNode(mark.textContent || ''), mark)
      parent?.normalize()
    })
  }

  // Use useEffect to search as user types
  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevent form submission if inside a form
    }
  }

  return (
    <nav className=''>
      <div className="bg-[#2D3748] p-2 text-white text-center font-arial">
        <p className='md:text-base text-sm'>Synexis research Portal- Synergy of Sciences</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center items-center justify-center m-5 md:mx-13 mx-3 gap-5'>
        <div>
          <div className='grid grid-cols-[auto_1fr] gap-4'>
            <img src='./Logo.png' className='row-span-2'></img>
            <div>
              <p className="font-bold md:text-6xl text-5xl my-2 font-georgia max-sm:text-4xl">
                Synexis
              </p>
              <p className="md:text-2xl text-xl italic font-georgia max-sm:text-lg">
                Synergy of Sciences
              </p>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='flex justify-end'>
            <input 
              className='w-[100%] md:px-20 px-10 md:text-base text-sm max-sm:px-4 py-3 border-[#CBD5E0] border-2' 
              placeholder='Search Author, Articles, Keywords'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className='absolute bottom-[14%] mt-4 mr-4 bg-[#38A169] text-white p-1 rounded-lg'
              onClick={() => handleSearch(searchTerm)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </nav>
  )
}