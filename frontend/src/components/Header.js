import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
    componentDidMount = ()=>{
        axios.get('/hi').then(response=>{
        const [{color}] = response.data
        console.log(color);
        this.setState({favoritecolor : color})
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

