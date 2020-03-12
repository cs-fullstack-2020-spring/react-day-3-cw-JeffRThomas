import React, { Component } from 'react';
import Movies from './Movies';
import Albums from './Albums';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.user1stMovie = "";
        this.user2ndMovie = "";
        this.user1stAlbum = "";
        this.user2ndAlbum = "";
    };
    render() {
        let moviesArray = [];
        return (
            <div>
                <h1> This is a list of your favorite movies and albums</h1>
                {/* <Movies /><Albums /> Reference Check!!!*/}
                {
                    this.user1stMovie = prompt("Enter you favorite movie:")
                }
                {
                    moviesArray.push(this.user1stMovie)
                }
                {
                    this.user2ndMovie = prompt("Enter your second favorite movie:")
                }
                {
                    moviesArray.push(this.user2ndMovie)
                }
                {
                    console.log(moviesArray)//Verify array holds user input values
                }
            </div>
        )
    };
};

export default Favorites;