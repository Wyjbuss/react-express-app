import React, { useState,useEffect } from 'react'
import axios from 'axios'
// axios is used to get data from a certain route
// in this caase it will get something from the backend
// because we specigied the backend rounte in the
// proxy on the package.json so we dont need to specify
// the direct route. it will search the backend if
// it dosent find it on the front end

export default function Header(){

    const [data,setData] = useState("")

   useEffect(()=>{
        axios.get('/user')
        .then(function (response) {

            console.log(`successfill on route /user`)
                // handle success
            const color = response.data[0].color
            setData(()=>color)
            
        })
        .catch(function (error) {
                // handle error
            console.log(error)
        })
        .then(function () {
                // always executed
        })
       
    },[])
    
    return (
        <div>
            <h1>My fav color is {data}</h1>
        </div>
    )
}

