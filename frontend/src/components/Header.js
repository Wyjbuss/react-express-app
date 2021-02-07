import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
    componentDidMount = ()=>{
        axios.get('/hh').then(response=>{
        console.log(response.status);
        })
    }
   
    render() {
        return (
            <div>
                <h1>My fav color is {this.state.favoritecolor}</h1>
            </div>
        )
    }
}

