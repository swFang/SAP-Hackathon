import React from 'react';
import Button from 'react-bootstrap/Button';
import './SubmitPostingButton.css';

class SubmitPostingButton extends React.Component {
    constructor(props) {
        super(props);
        this.makeApiCall = this.makeApiCall.bind(this);
        this.buttonOnClick = this.buttonOnClick.bind(this);

        this.state = {
            buttonStyle: "default",
            latitude: 0,
            longitude: 0
        };
    }

    buttonOnClick() {
        if (this.state.buttonStyle === "default") {
            this.setState({buttonStyle: "clicked"});
        }
    }

    makeApiCall() {
        this.props.submitPosting();
        this.buttonOnClick();
    }

    render() {
        return (
            <Button className="submitPostingButton" variant={this.state.buttonStyle} onClick={this.makeApiCall}>Submit Posting</Button>
        );
    }
}

export default SubmitPostingButton;