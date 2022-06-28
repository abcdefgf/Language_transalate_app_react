import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8da5ee72d196ef90a5f7e42c6667da8f`;
      const response = await fetch(url);

      const resJson = await response.json();
      //console.log(resJson);

      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="inputField"
        />
      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div className="info">
          <h2 className="location">
            <i className="fa fa-street-view"></i> {search}
          </h2>

          <h1 className="temp">{city.temp}</h1>

          <h3 className="temp-min-max">
            Min : {city.temp_min} °C | Max : {city.temp_max} °C
          </h3>
        </div>
      )}
    </div>
  );
};

export default Tempapp;
