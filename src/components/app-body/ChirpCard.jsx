import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../../index.css';

class ChirpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 'chirp-hide',
            container: this.container,
            newChirp: this.props.newChirp,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: 'chirp-show' });
        }, 10);
    }

    render() {
        return (
            <Card key={this.props.newChirp.key} className={"chirp-card col-centered " + this.state.visible}>
                <CardBody>
                    <CardTitle className='chirp-card-title'>{this.props.newChirp.user}</CardTitle>
                    <CardText className='chirp-card-text'>{this.props.newChirp.text}</CardText>
                    <CardImg>{this.props.newChirp.image}</CardImg>
                </CardBody>
            </Card>
        );
    }
}

export default ChirpCard;