import React from 'react'
const apiKey = {
        key: "555eea05f2d42452441573142de439a0",
        base: "http://api.openweathermap.org/data/2.5/"
    }
function weatherCard() {
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
    <div>
        <div className='search-box'>
            <input 
                type="text"
                className='search-bar'
                placeholder='Search City..' 
            />
        </div>
        <div className="location-box">
            <div className='location'>New York City, US</div>
            <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
            <div className="temp">
                15 C
            </div>
            <div className="weather">
                Sunny
            </div>
        </div>
    </div>
  )
}

export default weatherCard