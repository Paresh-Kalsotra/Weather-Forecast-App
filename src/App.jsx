import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DisplayInfo from "./components/DisplayInfo";

const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=de0fd830804cfb4d846ce6e40faa3d5d&units=metric&q=";

function App() {
  const [city, setCity] = useState(""); //sets city name
  const [weatherInfo, setWeatherInfo] = useState(null); // weather info
  const [iconUrl, setIconUrl] = useState(""); // Weather icon URL
  const [message, setMessage] = useState(""); //message for search

  //-------------handler for search-from submit
  const handleSearch = (event) => {
    event.preventDefault();

    //fetching data from open Weather map
    if (city) {
      fetch(url + city)
        .then((res) => res.json())
        .then((response) => {
          //---changing message and weatherinfo based on api response
          if (response && response.cod === "404") {
            setMessage("Can't find the city, Please enter another city!!");
            setWeatherInfo(null);
          } else if (response && response.cod === 200) {
            setMessage("");
            setWeatherInfo(response);

            // Fetching weather icon URL
            const iconCode = response.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            setIconUrl(iconUrl);
          } else {
            setMessage("Can't get weather data ");
            setWeatherInfo(null);
          }
        });
    } else {
      setMessage("Enter city name for its weather forecast");
      setWeatherInfo(null);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#113946", marginBottom: "1%" }}>
          Want weather forecast for your city?
        </h4>

        <form className="searchBox" onSubmit={handleSearch}>
          <input
            type="text"
            id="cityInput"
            name="cityInput"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <button type="submit" id="submit-btn">
            <FaSearch />
          </button>
        </form>

        {/* message */}
        <p style={{ padding: "2%", fontSize: "larger", color: "#113946" }}>
          {message}
        </p>

        {/* displaying card */}
        {weatherInfo ? (
          <DisplayInfo info={weatherInfo} iconUrl={iconUrl} />
        ) : (
          <img
            src="/default.png"
            alt="default img"
            width="400"
            style={{ opacity: "0.5" }}
          ></img>
        )}
      </div>
    </>
  );
}

export default App;
