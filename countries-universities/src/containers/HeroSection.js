import React from 'react'
import UniversityBox from './UniversityBox'

function HeroSection({ universities }) {
  return (
    <div className='hero-section'>
        {universities ? <UniversityBox universities={universities} /> : <h2>Looking for a university in a specific country? Search now!</h2>}
    </div>
  )
}

export default HeroSection