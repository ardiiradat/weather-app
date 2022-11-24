import React, { useState } from 'react';
const apiKey = {
        key: "555eea05f2d42452441573142de439a0",
        base: "http://api.openweathermap.org/data/2.5/"
    }
function weatherCard() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const search = e => {
        if (e.key === "Enter") {
            fetch(`${apiKey.base}weather?q=${query}&units=metrics&APPID=${apiKey.key}`)
            .then(res => res.json())
            .then(result => {
                setQuery("")
                setWeather(result)
                console.log(result)
            });
        }
    }
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp-273.15 > 12) ? 'app warm' : 'app') : 'app'}>
        <div className='search-box'>
            <input 
                type="text"
                className='search-bar'
                placeholder='Search City..' 
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress = {search}
            />
        </div>
        {(typeof weather.main != 'undefined') ? (
        <div>
            <div className="location-box">
                <div className='location'>{weather.name}, {weather.sys.country}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
                <div className="temp">
                    {Math.round((weather.main.temp-273.15))} °C
                </div>
                <div className="weather">
                    <p>{weather.weather[0].main}</p>
                </div>
            </div>
        </div>
        ) : ('')}
    </div>
  )
}

export default weatherCard