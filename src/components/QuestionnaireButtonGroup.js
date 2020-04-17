import React from 'react';
import QuestionnaireButton from './QuestionnaireButton';
import QuestionnaireNextButton from './QuestionnaireNextButton';

class QuestionnaireButtonGroup extends React.Component {
    constructor(props) {
        super(props);

        this.multiSelectFn = this.multiSelectFn.bind(this);
        this.createButtons = this.createButtons.bind(this);
        this.nextClicked = this.nextClicked.bind(this);
        this.state = {
            buttonObjects: props.buttonObjects,
            isMultiSelect: props.isMultiSelect,
            buttonRefs: [],
            nextButtonRef: React.createRef()
        };
    }

    multiSelectFn(idToSelect) {
        for (let i = 0; i < this.state.buttonRefs.length; i++) {
            const questionnaireButton = this.state.buttonRefs[i].current;
            if (idToSelect !== questionnaireButton.getId()) {
                questionnaireButton.setDeselected();
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
                    isMultiSelect={this.state.isMultiSelect}
                    multiSelectFn={this.multiSelectFn}
                    buttonId={buttonObjects[i].id}
                />
            );
        }
        return buttonArray;
    }

    nextClicked() {
        console.log("Clicked");
    }

    render() {
        return (
            <div className="container">
                {this.createButtons(this.state.buttonObjects)}
                <QuestionnaireNextButton ref={this.state.nextButtonRef} nextClicked={this.nextClicked}/>
            </div>
        );
    }
}

export default QuestionnaireButtonGroup;