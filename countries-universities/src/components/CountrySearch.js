import React from 'react';
import Select from 'react-select';

function CountrySearch({ countries, selectCountryName }) {

    if (countries){
        const options = countries.map((country) => {
            let countryObject = {}
            countryObject["value"] = country
            countryObject["label"] = country
            return countryObject
        })

        const handleSelectedCountry = (event) => {
            console.log(event)
            selectCountryName(event.value)
        }
            
        return (
            <div>
            <Select options={options} onChange={handleSelectedCountry} />
            </div>
        )
    }

    return (
        <Select options={[null]} />
    )
};

export default CountrySearch;