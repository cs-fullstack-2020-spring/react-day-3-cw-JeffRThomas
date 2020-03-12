import React, { Component } from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log("Albums child did mount.");
    }
    render() {
        return (
            <div>
                {/*Reference Check!! *Two Thumbs Up* */}
            </div>
        )
    };
};

export default Albums;