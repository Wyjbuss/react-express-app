import React, { useState,useEffect } from 'react'
import axios from 'axios'
// use axios to get routs from backend
// use youtube vid and docs https://www.youtube.com/watch?v=b6Oe2puTdMQ

export default function Header(){

    const [favColor,setFavColor] = useState("red")
   
   useEffect(()=>{

       console.log(`my fav color is ${favColor}`)
    },[])
    
    return (
        <div>
            <h1>My fav color is {favColor}</h1>
        </div>
    )
}

