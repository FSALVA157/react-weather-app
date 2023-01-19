import { useState } from "react";

export default function FormWeather({onChangeCity}){

const [pais, setPais] = useState('london')

const handleOnChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if(value !== null) setPais(value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    onChangeCity(pais);
}

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleOnChange} type="text"></input>
            
        </form>
    );
}