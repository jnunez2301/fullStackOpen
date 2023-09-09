import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [clickedCountry, setClickedCountry] = useState('')

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

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

 
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
            <button onClick={() => setShowInfo(!showInfo)}>show</button>
            {showInfo ? countryInfo : ""}
          </React.Fragment>
        ))
      );
    } else {
      return <p>Please enter a more specific input</p>;
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
