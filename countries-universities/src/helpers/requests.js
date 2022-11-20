const countriesApiUrl = "https://restcountries.com/v3.1/all"

export const getCountries = () => {
    return fetch(countriesApiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong, couldn't retrieve country data")
    })
  }

