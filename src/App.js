import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/Weather';
import Form from './components/Form';

const API_key = "493ae353fc1ae41fd2b138d7f904d186";

class App extends Component{
  constructor(){
      super()
      this.state = {
        city: '',
        main: '',
        icon: '',
        celsius: '',
        temp_max: '',
        temp_min: '',
        description: '',
        isError: false
      };

   this.weatherIcon = {
        Thunderstorm: 'wi-thunderstorm',
        Snow: 'wi-snow',
        Rain: 'wi-storm-showers',
        Atmosphere: 'wi-fog',
        Drizzle: 'wi-sleet',
        Clear: 'wi-day-sunny',
        Clouds: 'wi-day-fog'
      }

  }

  getCelsius = (temperature) => {
    let responsee = Math.floor(temperature - 273) 
    return responsee ;
  }

  getWeatherIcon = (icons, id) => {
    switch(true){
      case id >= 200 && id <= 232: this.setState({icon: this.weatherIcon.Thunderstorm});
      break;
      case id >= 300 && id <= 321: this.setState({icon: this.weatherIcon.Drizzle});
      break;
      case id >= 500 && id <= 531: this.setState({icon: this.weatherIcon.Rain});
      break;
      case id >= 600 && id <= 622: this.setState({icon: this.weatherIcon.Snow});
      break;
      case id >= 700 && id <= 781: this.setState({icon: this.weatherIcon.Atmosphere});
      break;
      case id === 800: this.setState({icon: this.weatherIcon.Clear});
      break;
      case id >= 801 && id <= 804: this.setState({icon: this.weatherIcon.Clouds});
      break;
      default: this.setState({icon: ''});
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value, 
          country = e.target.elements.country.value ;
      if( city && country) {
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
        .then(function(propp) {
          return propp.json()}
          )
          console.log(apiCall);
          this.setState({
            city: `${apiCall.name} , ${apiCall.sys.country}`,
            celsius: this.getCelsius(apiCall.main.temp),
            temp_max: this.getCelsius(apiCall.main.temp_max),
            temp_min: this.getCelsius(apiCall.main.temp_min),
            description: apiCall.weather[0].description
          })
    
          this.getWeatherIcon(this.weatherIcon, apiCall.weather[0].id);
      } else {
        this.setState({
          isError: true 
        })
      }

    }

  render(){
    const {city,celsius,temp_max,temp_min,description,icon,isError} = this.state ;
    
    return (
      <div className="App">

          <Form loadWeatherInfo={this.getWeather}
                error={isError}
           />

            <Weather 
              city={city} 
              celsius={celsius}
              temp_max={temp_max}
              temp_min={temp_min}
              icon={icon}
              description={description}
            />
      </div>
    );
  }
}

export default App;
