import React from 'react';
import Button from 'react-bootstrap/Button';
import './QuestionnaireNextButton.css';

class QuestionnaireNextButton extends React.Component {
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
        this.props.nextClicked();
    }

    render() {
        return (
            <Button className="nBtn" variant={this.state.buttonStyle} onClick={this.buttonOnClick} active={false}>
                Next
            </Button>
        );
    }
}

export default QuestionnaireNextButton;