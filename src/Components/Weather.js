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
                <p>Enter a Valid City Name</p>
            ) : 

            <div  className='info'>
                <h2 className='location'> 
                <i className='fas fa-map-pin'>
                <span className='city-name'>{search}</span>
                </i>
                </h2>
                <h1 className='temp'> {Math.round(city.temp- 273)}°C  </h1>

                <h3 className='temp'> Minimum Tenmp : {city.temp_min}°C</h3>
                <h3 className='temp'>Maximum Temp : {city.temp_max}°C</h3>

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