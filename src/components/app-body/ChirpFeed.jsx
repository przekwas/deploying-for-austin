import React, { Component } from 'react';
import '../../index.css';
import { ListGroup, } from 'reactstrap';
import ChirpCard from './ChirpCard.jsx';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpKeys: this.props.chirpKeys,
            chirpArray: this.props.chirpArray,
        }
        this.newChirp = this.props.newChirp;
    }

    render() {
        let chirpElements;
        // If there are any chirp objects in chirpArray
        if (this.state.chirpArray.length > 0) {
            // Map all chirp objects to an array of elements for rendering
            chirpElements = this.state.chirpArray.map((item) => {
                return (

                        <ChirpCard newChirp={item} key={item.key} />

                );
            });
            // Then reverse the array so chirps are displayed from newest to oldest
            chirpElements = chirpElements.reverse();
        }
        // Render chirp feed
        return (
            <ListGroup className="col-centered">{chirpElements}</ListGroup>
        );
    };
}

export default Feed;