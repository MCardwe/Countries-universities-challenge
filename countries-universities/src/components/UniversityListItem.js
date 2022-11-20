import React from 'react'

function UniversityListItem({ name, webPages }) {
    let universityUrl

    if (webPages !== undefined && webPages.length !== 0) {
        universityUrl = `${webPages[0]}`
    }

  return (
    <div className='university-list-item'>
        <a href={universityUrl}>{name}</a>
    </div>
  )
}

export default UniversityListItem