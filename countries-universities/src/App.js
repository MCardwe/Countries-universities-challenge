import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { getCountries } from './helpers/requests';

function App() {
  const [countries, setCountries] = useState();
  const [universities, setUniversities] = useState();
  const [selectedCountryName, setSelectedCountryName] = useState();

  useEffect(() => {
    getCountries()
    .then(responseJson => setCountries(responseJson))
    .catch((error) => {
      console.log(error)
    });
  }, [])

  const getUniversities = (selectedCountryName) => {
    fetch(`http://universities.hipolabs.com/search?country=${selectedCountryName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Could not find universities with the name ${selectedCountryName}`)
    })
    .then(responseJson => setUniversities(responseJson))
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
