import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import MapData from "./mapData";
import axios from "axios";

function Home() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  const getData = () => {
    var apiKey = "1b3f010633075c5705e2091d07de6135";
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        setCity(res.data.main);
        console.log(res.data);
      })
      .catch((err) => {
        alert("No City Name Found");
        // console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bigdiv">
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button type="button" onClick={getData} className="getWeatherbtn">
            Get Weather
          </button>
        </div>
        {!city ? (
          <p className="errorMsg">NO DATA FOUNT</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <div></div>
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </h3>
              <h3>Humidity : {city.humidity}</h3>
              <h3>Pressure : {city.pressure}</h3>
            </div>
          </div>
        )}
      </div>
      <div className="box2">
        <MapData
          src={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        />
      </div>
    </div>
  );
}

export default Home;
