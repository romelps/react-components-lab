import './WeatherForecast.css'

const WeatherForecast = (props) => {
    const { weatherForecast } = props
    return (
        <div class="weather">
            <h3>{ weatherForecast.day}</h3>
            <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
            <p><span>conditions: </span> <br></br>{weatherForecast.conditions}</p>
            <p><span>time: </span><br></br>{weatherForecast.time}</p>
        </div>
    )
}

export default WeatherForecast;