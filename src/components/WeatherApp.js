import FormWeather from "./FormWeather";
import "../appWeatherStyle.css";
import { useEffect, useState } from "react";
import { WeatherMainInfo } from "./WeatherMainInfo";


export default function WeatherApp(){

const [clima, setClima] = useState(null)

useEffect(() => {
  loadInfo();

}, [])

useEffect(() => {
  document.title = `weather | ${clima?.location.name} || ""`  
}, [clima])



const loadInfo=async (pais="Argentina")=>{
    const url = `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${pais}`;
    const res = await fetch(url);
    const data = await res.json();
    setClima(data)
}

const handleChangeCity = (pais) => {    
    loadInfo(pais);
};

    return (
        <div className="weatherContainer">
            <h1>App de Clima</h1>
            <hr/>
            <FormWeather onChangeCity={handleChangeCity}/>
            <div>
                <WeatherMainInfo clima={clima}/>

            </div>
        </div>
    )
} 