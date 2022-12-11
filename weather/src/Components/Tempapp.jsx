import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import MapData from "./mapData";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      let apiKey = "1b3f010633075c5705e2091d07de6135";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setCity(data.main);
      console.log(data);
    };
    fetchApi();
  }, [search]);

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
        </div>
        {!city ? (
          <p className="errorMsg">NO DATA FOUNT</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
              <div>
                
              </div>
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </h3>
            </div>
            {/* <div className="wave -one"></div>
            <div className="wave -two"></div>

            <div className="wave -three"></div> */}
          </div>
        )}
      </div>
      <div className="box2">
        {/* <iframe src={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
               frameborder="0">
               </iframe> */}
        <MapData
          src={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        />
      </div>
    </div>
  );
}

export default Tempapp;
