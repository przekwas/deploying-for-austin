import React, { Component } from 'react';
import '../../index.css';
import ChirpHandler from './ChirpHandler';

class AppBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appTheme: this.props.appTheme,
        }
    }
    render() {
        return <ChirpHandler />
    }
}

export default AppBody;