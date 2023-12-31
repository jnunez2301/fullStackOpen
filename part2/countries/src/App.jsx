import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const weatherAPIKey = import.meta.env.VITE_SOME_KEY;

const App = () => {
  
  const [value, setValue] = useState("");
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState({});
  const [weather, setWeather] = useState({})
  const [showInfo, setShowInfo] = useState(false);
<<<<<<< Updated upstream
  const [clickedCountry, setClickedCountry] = useState(null)
=======
<<<<<<< HEAD

=======
  const [clickedCountry, setClickedCountry] = useState(null)
>>>>>>> f3057e6a7fddf53955a0e6d3d4e363558b78f48b
>>>>>>> Stashed changes

  useEffect(() => {
    if (country) {
      console.log("fetching...");
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          const data = response.data;
          setSearch(
            data.filter((word) =>
              word.name.common.toLowerCase().includes(country.toLowerCase())
            )
          );
        })
        .catch((error) => {
          console.error("Bad request", error);
        });
    }
  }, [country]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCountry(value);
  };

  const handleCountryClick = (index) => {
    const selectedCountry = search[index];
    setClickedCountry(selectedCountry);
    setShowInfo(!showInfo);
  
    if (selectedCountry) {
      const lat = selectedCountry.latlng[0];
      const lon = selectedCountry.latlng[1];
  
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error('Weather request failed', error);
        });
    }
  };
  
  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const handleCountryClick =() =>{
    
    setShowInfo(!showInfo);
  }


  const ShowSearch = () => {
    
    const countryInfo = (
      <div>
        {
        search.length > 0 ?
        search.map((countries, index) => (
          <React.Fragment key={index}>
            <h1>{countries.name.common}</h1>
            <p>
              {countries.capital}
              <br />
              area {countries.area}
            </p>
            <h2>Languages:</h2>
            <ul>
              {Object.keys(countries.languages).map((lang, langIndex) => (
                <li key={langIndex}>{countries.languages[lang]}</li>
              ))}
            </ul>
            <img src={countries.flags.png} alt={countries.flag} />
          </React.Fragment>
        ))
        : ''
      } 
      </div>
    );

    if (search.length > 0 && search.length <= 10) {
      return search.length === 1 ? (
        countryInfo
      ) : (
        
        search.map((countries, index) => (
          <React.Fragment key={index}>
            <li>{countries.name.common}</li>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
            {/* <button onClick={() => setShowInfo(!showInfo)}>show</button> */}
            <button onClick={() => handleCountryClick()}>show</button>
            {showInfo ? countryInfo :" "}
=======
>>>>>>> Stashed changes
            <button onClick={() => handleCountryClick(index)}>show</button>
            {showInfo && clickedCountry.name.common === countries.name.common
             ? 
              <>
              <h1>{clickedCountry.name.common}</h1>
              <p>Capital: {clickedCountry.capital}</p>
              <ul>
              {Object.keys(clickedCountry.languages).map((lang, langIndex) => (
                <li key={langIndex}>{clickedCountry.languages[lang]}</li>
              ))}
            </ul>
            <img src={clickedCountry.flags.png} alt={`${clickedCountry.flag} flag`}/>
            {Object.keys(weather).length > 0 && ( // Conditionally render weather information
                <>
                  <h1>Weather in {clickedCountry.name.common}</h1>
                  <p>Temperature: {weather.main.temp} Celsius </p>
                  <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].main} />
                  <p>{weather.wind.speed} m/s</p>
                </>
              )}
              </>
            :
            ''
            }
<<<<<<< Updated upstream
=======
>>>>>>> f3057e6a7fddf53955a0e6d3d4e363558b78f48b
>>>>>>> Stashed changes
          </React.Fragment>
        ))
      );
    } else {
      return <p>Please enter a valid input</p>;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleSearch} />
      </form>
      <pre>{<ShowSearch />}
      
</pre>
    </>
  );
};

export default App;
