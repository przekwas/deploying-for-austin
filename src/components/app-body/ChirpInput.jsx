import React, { Component } from 'react';
import { FormGroup, Label, InputGroup, Input, Button, InputGroupAddon } from 'reactstrap';
import Chirp from '../shared/Chirp';

class ChirpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formLabel: <h4>User: {this.props.user}</h4>, // Edit later
            visible: true,
            complete: false,
            sanitized: false,
            nextKey: this.props.nextKey,    // Passed from Chirp Handler, which keeps track of all chirp keys
            user: this.props.user,          // Passed from Chirp Handler
            type: 'text',
            text: '',
            image: null,
            link: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    }

    handleSubmit() {
    /*
    - Handles chirp submission from submit button and [Enter] key
    - Compiles state data into new Chirp object and validates data
    - Passes new Chirp submission to parent function for handling/rendering
    */
        let submission = new Chirp(
            this.props.nextKey, // not modified by ChirpInput
            this.props.user,    // not modified by ChirpInput
            this.state.type,
            this.state.text,
            this.state.image,
            this.state.link,
        );
        // Validate and submit
        submission.validCheck() === true ? this.props.handleNewChirp(submission) // Callback function passed from ChirpHandler, returns new Chirp object back to ChirpHandler
            : console.log("error_invalid_chirp_object: ", submission);
        this.setState({ text: '' }); // reset input field
    }

    // Handles text input box
    handleInputChange(value) {
        this.setState(() => {
            return { text: value };
        });
    }
    // Checks for [Enter] keypress
    handleInputKeyPress(event) {
        return (event.charCode === 13 ? this.handleSubmit() : false);
    }

    render() {
        return (
            <FormGroup>
                <Label for='chirp-text-input'>{this.state.formLabel}</Label>
                <InputGroup className='col-centered'>
                    <Input
                        id='chirp-text-input'
                        type='text'
                        placeholder="Min. 240 characters"
                        value={this.state.text}
                        onChange={(event) => { this.handleInputChange(event.target.value) }}
                        onKeyPress={(event) => { this.handleInputKeyPress(event) }}
                        onSubmit={(event) => { this.handleSubmit(event) }}
                    />
                    <InputGroupAddon addonType="append">
                        <Button type='submit' id='chirp-submit-button' onClick={this.handleSubmit}>chirp it.</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default ChirpInput;