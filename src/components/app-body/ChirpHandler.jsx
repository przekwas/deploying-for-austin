import React, { Component } from 'react';
import '../../index.css';
import ChirpInput from './ChirpInput.jsx';
import ChirpFeed from './ChirpFeed.jsx';
import { Row, Col, Container } from 'reactstrap';

// ChirpHandler lifts state from ChirpInput and passes the lifted data to ChirpFeed for rendering

class ChirpHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newChirp: null,
            chirpArray: [],
            chirpKeys: [],
            nextKey: null,
        }
        console.log(this.state.nextKey);
        this.handleNewChirp = this.handleNewChirp.bind(this);
    }

    handleNewChirp(submission) { // submission value passed from ChirpInput (child component)

        // pushing old array states into temp variables to be used in setState()
        let newArray = this.state.chirpArray;
        newArray.push(submission);
        let newKeys = this.state.chirpKeys;
        newKeys.push(submission.key)

        console.log(newArray);
        this.setState(() => { // functional setState() used to avoid problems with async react DOM updates
            return {
                newChirp: submission,
                chirpArray: newArray,
                chirpKeys: newKeys
            }
        });
    };

    render() {
        // new key set everytime ChirpHandler renders
        let generateNewKey = this.state.chirpKeys ? String(10000000000000 + this.state.chirpKeys.length) : String(10000000000000);

        return (
            <div id='app-body'>
                <Container id='chirp-handler'>
                    <Row id='chirp-input-row'>
                        <Col sm='12' md='12' lg={{ size: 6, offset: 3 }}>
                            <ChirpInput
                                nextKey={generateNewKey}
                                // Hard coding valid input data for testing purposes
                                user='Player 1'
                                type='default'
                                text={null}
                                // Sending ChirpInput a callback function to lift state
                                handleNewChirp={this.handleNewChirp}
                            />
                        </Col>
                    </Row>
                    <Row id='chirp-feed-row'>
                        <Col sm='12' md='12' lg={{ size: 6, offset: 3 }}>
                            <ChirpFeed
                                newChirp={this.state.newChirp}
                                chirpArray={this.state.chirpArray}
                                chirpKeys={this.state.chirpKeys}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ChirpHandler;