import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import './GetStartedHelpingButton.css';

class GetStartedHelpingButton extends React.Component {
    constructor(props) {
        super(props);

        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.state = {
            buttonStyle: "default",
        };
    }

    buttonOnClick() {
        if (this.state.buttonStyle === "default") {
            this.setState({buttonStyle: "clicked"});
        }
    }

    render() {
        return (
            <Link to="/Dashboard">
                <Button className="getStartedButton" variant={this.state.buttonStyle} onClick={this.makeApiCall}>
                    Get Started!
                </Button>
            </Link>
        );
    }
}

export default GetStartedHelpingButton;