console.log('Hello this is the main');

import { myAPIKey } from "./myAPIKey.js";

console.log(myAPIKey);

// let weatherDescription= document.querySelector('.weather.description')
// let High = document.querySelector('.main.temp_max')
// let Low = document.querySelector('.main.temp_min')
// let Current = document.querySelector('.main.temp')
// let feelsLike = document.querySelector('.main.feels');
// let cloudiness = document.querySelector('.clouds.all');



     // Grab the form
    let form = document.getElementById('cityForm');
        console.log(form);

    // Create a function to handle submit event
 async function handleSubmit(e){
        e.preventDefault(); // prevent the event from refresshing
        // console.log(e);
        let cityName = e.target.cityName.value;
        // console.log(cityName);
        let cityWeather = await getCityWeather(cityName);
        console.log(cityWeather);
        // console.log(cityWeather);
        console.log(weatherDescription);

        // // Clear the input of the city name
        // e.target.cityName.value = '';
        
        
    }

// function that takes in a city name, makes the request to the api and returns a javascript object
async function getCityWeather(cityName){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}&units=imperial`);
    // console.log(response);
    let data = await response.json()
    // console.log(response.json[0]);
    return data [0]
}

    // Function that will take in a city name and display the high temp, low temp, current temp, feels like and cloudiness
    function buildCityCard(cityObj){
        // Create a card div
        let card = document.createElement('div');
        card.className = 'card h-100';

    // Create card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Add title  to the card body
    cardBody.append(cityTitle);

       // Add the card body to the card
       card.append(cardBody);

    // Add handleSUbmit function to the form as a listener to the submit event
    form.addEventListener ('submit', handleSubmit);


{
    // let formInput = document.querySelector("#cityName");

    // formIpout.addEventListener('input', async(e)) => {
    //     console.log(e.target.value)
    //     let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}&units=imperial`);
    //     let data = await res.json()

    //     let cities = document.createElement('ul');
    //     for 
    // }
}
    // const displayData=(weather)=>{
    //     Description.innerText=`${weather.description}`
    //     Current.innerText=`${weather.main.temp}°F`
    //     feelsLike.innerText=`${weather.main.feels_like}`
    //     cloudiness.innerText=`${weather.clouds.all}`
    //     High.innerText=`${weather.main.temp_max}°F`
    //     Low.innerText=`${weather.main.temp_min}°F`
    
    // }

}
    
    // Create a function to handle submit event
    // async function handleSubmit(e){
    //     e.preventDefault(); // Prevent the event from refreshing the page
    //     console.log(e);
    //     let cityName = e.target.cityName.value;
    //     console.log(cityName);
    //     let cityInfo = await getCityInfo(cityName);
    //     buildcityCard(cityInfo);
    //     // Clear the input of the city name
    //     e.target.cityName.value = '';
    // }

    // Function that takes in a city name, makes the request to the API, and returns a JavaScript object
    // async function getCityInfo(cityName){
    //     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={myAPIKey}`);
    //     console.log(response)
    //     let data = await response.json()
    //     console.log(data[0]);
    //     return data[0]
    // }