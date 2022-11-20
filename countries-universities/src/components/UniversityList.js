import React from 'react'
import UniversityListItem from './UniversityListItem'

function UniversityList({ universities }) {

    const universityNodes = universities.map((university) => {
        return <UniversityListItem name={university.name} webPages={university.web_pages} />
    }) 

  return (
    <>
        {universityNodes ? universityNodes : null}
    </>
  )
}

export default UniversityList