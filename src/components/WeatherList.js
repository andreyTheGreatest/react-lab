import React from 'react';
import Weather from './Weather'
import { Link } from 'react-router-dom';
import '../styles/WeatherList.css'
import logo from '../styles/puff-1.svg'

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            isDataFetched: false
        }
    }

    componentDidMount = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://www.metaweather.com/api/location/924938/';

        const api = await fetch(proxyUrl + targetUrl);
        const wholeData = await api.json();
        this.setState({
            data: wholeData,
            isDataFetched: true
        });
    }

    render() {
        if (!this.state.isDataFetched) {
            return (
                <div id="loading">
                    <h1>Loading...  <img src={logo} alt="ooops!"></img></h1>
                    
                </div>
            );
        }
        const content = this.state.data.consolidated_weather.map((weather) => 
            <Weather data={weather} />
        )
        const time = new Date(this.state.data.time);
        const sun_rise = new Date(this.state.data.sun_rise);
        const sun_set = new Date(this.state.data.sun_set);
        return (
            <div id="container">
                <div id="header">
                    <div id="spot">
                        <h1>Kiev</h1>
                        <p>Ukraine</p>
                    </div>
                    <div id="time">
                        <div class="inline">
                            <h6>Time</h6>
                            <p>{time.toLocaleTimeString()}</p>
                        </div>
                        <div class="inline">
                            <h6>Sunrise</h6>
                            <p>{sun_rise.toLocaleTimeString()}</p>
                        </div>
                        <div class="inline">
                            <h6>Sunset</h6>
                            <p>{sun_set.toLocaleTimeString()}</p>
                        </div>
                    </div>
                    
                </div>
                <div id="box">
                    {content}
                </div>
                <div id="logout">
                    <Link to="/">Logout</Link>
                </div>
            </div>
        );
    }
}

export default WeatherList;