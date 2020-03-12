import React, { Component } from 'react';

class Movies extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        console.log("Movies child did mount.");
    }
    render() {
        return (
            <div>
                {/* Reference Check! *One Thumb Up* */}
            </div>
        )
    };
}

export default Movies;