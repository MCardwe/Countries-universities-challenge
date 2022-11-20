import React from 'react'
import CountrySearch from '../components/CountrySearch'

function SearchBar({countries, selectCountryName}) {

  return (
    <CountrySearch countries={countries} selectCountryName={selectCountryName}  />
  )
}

export default SearchBar