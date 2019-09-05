import React from 'react';
import './WeatherDisplay.css';

// const WeatherDisplay = (props)=>{
//     var {weatherList} = props;
//     if(weatherList){
//     console.log(weatherList.length);
//     }
//     console.log();
//     return(
//         <div></div>
//     )
// }

var style2={
    marginLeft: 30
}

class WeatherDisplay extends React.Component{
    createTable = (props) => {
        var {weatherList} = this.props;
        let table = []
    
        if(weatherList){
            //console.log(this.props.weatherList);
            let list = this.props.weatherList;
            if(list.length > 0){ 
                for(var i=0;i<8;i++){
                    let children = [];
                    children.push(<td>{`${list[i].dt_txt}`}</td>);
                    children.push(<td>{`Max ${list[i].main.temp_max}`}&#8451;</td>);
                    children.push(<td>{`Min ${list[i].main.temp_min}`}&#8451;</td>);
                    children.push(<td>{`Humidity ${list[i].main.humidity}`}%</td>);
                    children.push(<td>{`${list[i].weather[0].description}`}</td>);
                    children.push(<td><img src={`http://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`} height='50' width='50' /></td>);
                    
                    table.push(<tr>{children}</tr>)
                }
            }
            console.log(table);
        }

        return table;
      }

    render(){
        
        
        return(
            <div class="weatherDiv">
                <table width="1000" style={style2}>
                    {this.createTable(this.props)}
                </table>
            </div>
        )
    }
}

export default WeatherDisplay;