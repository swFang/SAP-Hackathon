import React from 'react';
import Button from 'react-bootstrap/Button';
import './QuestionnaireButton.css';

class QuestionnaireButton extends React.Component {
    constructor(props) {
        super(props);

        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.setDeselected = this.setDeselected.bind(this);
        this.getId = this.getId.bind(this);
        this.state = {
            buttonStyle: "outline",
            isSelected: false
        };
    }

    buttonOnClick() {
        if (this.state.buttonStyle === "outline") {
            this.setState({
                buttonStyle: "active",
                isSelected: true
            });
        }
        else {
            this.setState({
                buttonStyle: "outline",
                isSelected: false
            });
        }

        if (!this.props.isMultiSelect) {
            this.props.multiSelectFn(this.getId());
        }
    }

    setDeselected() {
        this.setState({
            isSelected: false,
            buttonStyle: "outline"
        });
    }

    getId() {
        return this.props.buttonId;
    }

    getIsSelected() {
        return this.state.isSelected;
    }

    render() {
        return (
            <Button className={"qBtn"} variant={this.state.buttonStyle} onClick={this.buttonOnClick} active={false} block={true}>
                {this.props.buttonText}
            </Button>
        );
    }
}

export default QuestionnaireButton;