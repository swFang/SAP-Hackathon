import React from 'react';
import QuestionnaireButton from './QuestionnaireButton';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import './QuestionnaireButtonGroup.css';

class QuestionnaireButtonGroup extends React.Component {
    constructor(props) {
        super(props);

        this.multiSelectFn = this.multiSelectFn.bind(this);
        this.createButtons = this.createButtons.bind(this);
        this.nextClicked = this.nextClicked.bind(this);
        this.state = {
            buttonRefs: [],
            nextButtonRef: React.createRef()
        };
    }

    multiSelectFn(idToSelect) {
        for (let i = 0; i < this.state.buttonRefs.length; i++) {
            const questionnaireButton = this.state.buttonRefs[i].current;
            if (!!questionnaireButton) {
                if (idToSelect !== questionnaireButton.getId()) {
                    questionnaireButton.setDeselected();
                }
            }
        }
    }

    createButtons(buttonObjects) {
        let buttonArray = [];
        for (let i = 0; i < buttonObjects.length; i++) {
            const buttonRef = React.createRef();
            this.state.buttonRefs.push(buttonRef);
            buttonArray.push(
                <QuestionnaireButton
                    ref={buttonRef}
                    buttonText={buttonObjects[i].title}
                    isMultiSelect={this.props.isMultiSelect}
                    multiSelectFn={this.multiSelectFn}
                    buttonId={buttonObjects[i].id}
                    buttonNextQuestionId={buttonObjects[i].nextQuestionId}
                />
            );
        }
        return buttonArray;
    }

    nextClicked() {
        let selectedResponses = []
        let nextQuestionId;
        for (let i = 0; i < this.state.buttonRefs.length; i++) {
            let button = this.state.buttonRefs[i].current;
            if (!!button) {
                if (button.getIsSelected()) {
                    nextQuestionId = button.getNextQuestionId();
                    selectedResponses.push(button.getId());
                }
                button.setDeselected();
                this.state.nextButtonRef.current.resetButton();
            }
        }

        this.props.updateQuestionnaireResponses(selectedResponses, nextQuestionId);
    }

    render() {
        return (
            <div className="questionnaireGroup">
                <h3 className="questionnaireGroupTitle">{this.props.questionnaireGroupTitle}</h3>
                {this.createButtons(this.props.buttonObjects)}
                <QuestionnaireNextButton ref={this.state.nextButtonRef} nextClicked={this.nextClicked}/>
            </div>
        );
    }
}

export default QuestionnaireButtonGroup;