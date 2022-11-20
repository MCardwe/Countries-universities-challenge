import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { getCountries, getUniversities } from './helpers/requests';
import HeroSection from './containers/HeroSection';
import SearchBar from './containers/SearchBar';

function App() {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState(null);
  const [selectedCountryName, setSelectedCountryName] = useState(null);

  const selectedCountry = useMemo(
    () => countries.find(country => country === selectedCountryName),
    [countries, selectedCountryName]
  )

  // useEfffect to fetch the countries from the country api and set up state
  useEffect(() => {
    getCountries()
    .then(responseJson => setCountries(mapCountryNames(responseJson)))
    .catch((error) => {
      console.log(error)
    });
  }, [])

  // useEffect to watch for selectedCountry to change,  if it does the it will update the universities state with all the universities
  // from the selected country
  useEffect(() => {
    if (selectedCountry){
      getUniversities(selectedCountry)
      .then(responseJson => setUniversities(responseJson))
      .catch((error) => {
        console.log(error)
    });
    }
  }, [selectedCountry])
  
  // countries api returns a lot of unnessecary data, this helps to shave it down to what we actually need
  const mapCountryNames = (countries) => {
    if (countries) {
      return countries.map((country) => {
        return country.name.common
      })
    }
  }

  const selectCountryName = (countryName) => {
    setSelectedCountryName(countryName)
  }

  return (
    <div className="App">
      <div className='page'>
        <HeroSection universities={universities} />
        <SearchBar countries={countries} selectCountryName={selectCountryName} />
      </div>
    </div>
  );
}

export default App;
