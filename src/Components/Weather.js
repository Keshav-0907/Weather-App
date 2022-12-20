import React, { useEffect, useState } from 'react'

export const Weather = () => {

    const[city, setcity] = useState(null)
    const[search,setsearch] = useState("Mumbai")

    useEffect( ()=>{
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4f654c92c7f8d25c212d4ded30edffdb`
            const response = await fetch(url)
            //console.log(response)

            const resJson = await response.json();
            //console.log(resJson)
            setcity(resJson.main)
        }
        fetchAPI()
    },[search])

  return (
    <div>    

    <div className='container'> 
            <div className='box'>  
                <div className='inputData'>
                    <input 
                    placeholder='Enter a City'
                    type="search" 
                    className='inputField'
                    onChange={ (event) => {
                        setsearch(event.target.value)
                    }}
                    ></input>
                </div>

            {!city ? (
                <>
                <p>Please enter a valid City</p>
                <img className='wait-img' src='https://cdn-icons-png.flaticon.com/512/3175/3175199.png' alt=''></img>
                </>
            ) : 

            <div  className='info'>
                <h2 className='location'> 
                <i className='fas fa-map-pin'>
                <span className='city-name'>{search}</span>
                </i>
                </h2>
                <h1 className='temp'> {Math.round(city.temp- 273)}°C  </h1>

                <h3 className='temp'> Min Tenmp : {Math.round(city.temp_min- 273)}°C</h3>
                <h3 className='temp'>Max Temp : {Math.round(city.temp_max- 273)}°C</h3>
                
                <div className='add-info'>
                    <h5>Air Pressure : {city.pressure} hPa</h5>
                    <h5>Humidity : {city.humidity}%</h5>
                </div>


                <div className=' wave1'></div>
                <div className=' wave2'></div>
                <div className=' wave3'></div>
            </div>
            }
            </div>
    </div>
    </div>
      ) 
}