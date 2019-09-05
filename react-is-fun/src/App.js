import React from 'react';
import './App.css';
import UserForm from './components/UserForm' 
import WeatherDisplay from './components/WeatherDisplay'
import { whileStatement } from '@babel/types';

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ab3e1d94d195b07e3c2506085595efed

const apiKey = 'ab3e1d94d195b07e3c2506085595efed';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      weatherList:undefined,
      city:undefined,
      country:undefined,
      error:undefined
    }
    this.getWeatherDataByCity = this.getWeatherDataByCity.bind(this);
  }
  

  getWeatherDataByCity = async function(e){
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let req = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`);
    let res = await req.json();

    if(city && country){
      console.log(res);
      console.log(res.list.length);
      this.setState({
        weatherList : res.list,
        city : res.city.name,
        country : res.city.country,
        error: ""
      });
    }
    else{
      this.setState({
        weatherList:undefined,
        city:undefined,
        country:undefined,
        error:"Either city or country missing"
      });
    }
    
  }

  render(){
    return(
      <div class="weather">
        <UserForm getWeatherDataByCity={this.getWeatherDataByCity}/>
          
          <WeatherDisplay
            weatherList = {this.state.weatherList}
            error = {this.state.error}
          />
      </div>
    )
  }
}

export default App;
