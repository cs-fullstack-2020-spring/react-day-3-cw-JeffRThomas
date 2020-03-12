import React, { Component } from 'react';
import Movies from './Movies';
import Albums from './Albums';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.user1stMovie = "";
        this.user2ndMovie = "";
    };
    render() {
        return (
            <div>
                <h1> This is a list of your favorite movies and albums</h1>
                <Movies /><Albums />
            </div>
        )
    };
};

export default Favorites;