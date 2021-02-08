import React, { useState,useEffect } from 'react'

export default function Header(){

    const [favColor,setFavColor] = useState("red")
   
   useEffect(()=>{console.log(`my fav color is ${favColor}`)},[])
    
    return (
        <div>
            <h1>My fav color is {favColor}</h1>
        </div>
    )
}

