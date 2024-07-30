import './App.css'
import axios from 'axios'


function App() {

  axios.get('https://swapi.dev/api/people/4')
  .then((starWarsChar) => {
    console.log(starWarsChar.data)
  })

  axios.get('https://restcountries.com/v3.1/name/france')
  .then((countryName) => {
    console.log(countryName.data[0].name.common)
  })

  const firstCountriesArray = []

  for (let i = 0 ; i < 10 ; i++) {
    axios.get(`https://restcountries.com/v3.1/all`)
    .then((firstCountries) => {
      firstCountriesArray.push(firstCountries.data[i])
    })
  }

  console.log(firstCountriesArray)

  async function getVader() {
    const response = await axios.get('https://swapi.dev/api/people/4')
    console.log(response.data)
  }

  getVader()

  async function getFrance() {
    const response = await axios.get('https://restcountries.com/v3.1/name/france')
    console.log(response.data[0].name.common)
  }

  getFrance()

  async function getFirstCountries() {
    const response = await axios.get('https://restcountries.com/v3.1/all')

    let firstCountries = []

    for (let i = 0 ; i < 10 ; i++) {
      firstCountries.push(response.data[i])
    }

    console.log(firstCountries)
  }

  getFirstCountries()

  return (
    <div className='App'>
    </div>
  )
}

export default App
