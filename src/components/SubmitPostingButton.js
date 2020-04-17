import React from 'react';
import Button from 'react-bootstrap/Button';
import './SubmitPostingButton.css';

class SubmitPostingButton extends React.Component {
    constructor(props) {
        super(props);
        this.makeApiCall = this.makeApiCall.bind(this);
        this.state = {
            buttonStyle: "default",
        };
    }

    buttonOnClick() {
        if (this.state.buttonStyle === "default") {
            this.setState({buttonStyle: "clicked"});
        }
    }

    makeApiCall() {
        // fetch("https://localhost:5000/addPostingData")
        //     .then(res)
        this.props.submitPosting();
    }

    // postName={this.props.postName}
    // description={this.props.description}
    // location={this.props.location}
    // date={this.props.date}
    // contactInfo={this.props.contactInfo}

    render() {
        return (
            <Button className="submitPostingButton" variant={this.state.buttonStyle} onClick={this.makeApiCall}>Submit Posting</Button>
        );
    }
}

export default SubmitPostingButton;