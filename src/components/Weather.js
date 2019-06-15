import React from 'react';
import '../styles/Weather.css'

const weekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

class Weather extends React.Component {
    render() {
        const string = `https://www.metaweather.com/static/img/weather/${this.props.data.weather_state_abbr}.svg`
        const date = new Date(this.props.data.applicable_date);
        const dateToCompare = new Date();
        const weekDay = date.getDay();
        const day = date.getDate();
        const month = months[date.getMonth()];

        const fulldate = [];
        if (weekDay === dateToCompare.getDay()) {
            fulldate.push("Today")
        }
        else if (weekDay === dateToCompare.getDay() + 1) {
            fulldate.push("Tomorrow");
        }
        else {
            fulldate.push(weekDays[weekDay - 1]);
            fulldate.push(day);
            fulldate.push(month);
        }

        return (
            <div id="card">
                <p id="date">{fulldate[0]} {fulldate[1]} {fulldate[2]}</p>
                <div id="weather_state">
                    <img id="image" src={string} alt="not found"></img>
                    <p id="state_name">{this.props.data.weather_state_name}</p>
                </div>
                <p>Max: {Math.round(this.props.data.max_temp)} °C</p>
                <p>Min: {Math.round(this.props.data.min_temp)} °C</p>
                <p>{Math.round(this.props.data.wind_speed)}mph</p>
                <h6>Humidity</h6><p>{this.props.data.humidity}%</p>
                <h6>Visibility</h6><p>{Math.round(this.props.data.visibility).toFixed(1)} miles</p>
                <h6>Pressure</h6><p>{Math.round(this.props.data.air_pressure)}mb</p>
                <h6>Confidence</h6><p>{this.props.data.predictability}%</p>
            </div>
        );
    }
}

export default Weather;