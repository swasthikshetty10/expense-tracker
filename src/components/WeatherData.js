import React, { useEffect, useState } from 'react'
import { TbWind, TbTemperature } from 'react-icons/tb'

function WeatherData() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    function getMyLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    async function fetchWeather() {
        setLoading(true);
        const position = await getMyLocation();
        const { latitude, longitude } = position.coords;
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await res.json();
        setWeather(data.current_weather);
        setLoading(false);
    }

    useEffect(() => {
        fetchWeather();
    }, [])
    return (
        !loading ? <div className="weather">
            <div>
                <span>{weather.temperature}</span>
                <TbTemperature />
            </div>
            <div>
                <span>{weather.windspeed} mph</span>
                <TbWind />
            </div>
        </div> : null
    )
}

export default WeatherData