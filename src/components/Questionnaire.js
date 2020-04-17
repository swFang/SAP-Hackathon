import React from 'react';
import QuestionnaireButtonGroup from './QuestionnaireButtonGroup';
import './Questionnaire.css';

const Q1 = {
    title: "What are you here to do?",
    multiSelect: false,
    buttonObjects: [
        {id: 1_1, title: "I can volunteer time to help", nextQuestionId: 3},
        {id: 1_2, title: "I need some help", nextQuestionId: 2}
    ]
};

const Q2 = {
    title: "How can we help you?",
    multiSelect: false,
    buttonObjects: [
        {id: 2_1, title: "Acquiring PPE", nextQuestionId: 3},
        {id: 2_2, title: "Need Materials to Make PPE", nextQuestionId: 3},
        {id: 2_3, title: "Acquiring Household Goods", nextQuestionId: 3},
        {id: 2_4, title: "Purchasing Groceries", nextQuestionId: 3},
        {id: 2_5, title: "Volunteers", nextQuestionId: 3}
    ]
};

const Q3 = {
    title: "What type of equipment do you have access to?",
    multiSelect: true,
    buttonObjects: [
        {id: 3_1, title: "I have a 3D printer", nextQuestionId: 4},
        {id: 3_2, title: "I have a sewing machine", nextQuestionId: 4},
        {id: 3_3, title: "I don't have equipment but I can still help", nextQuestionId: 4}
    ]
};

const Q4 = {
    title: "Do you have material or food that you can donate?",
    multiSelect: true,
    buttonObjects: [
        {id: 4_1, title: "Personal protective equipment", nextQuestionId: 5},
        {id: 4_2, title: "Cloth for masks", nextQuestionId: 5},
        {id: 4_3, title: "3D printing material", nextQuestionId: 5},
        {id: 4_4, title: "Excess non-perishable food", nextQuestionId: 5}
    ]
};

const Q5 = {
    title: "Do you have a way to transport material?",
    multiSelect: true,
    buttonObjects: [
        {id: 5_10, title: "I can transport", nextQuestionId: 6},
        {id: 5_11, title: "I need help to transport some materials", nextQuestionId: 6},
        {id: 5_11, title: "I need someone to pickup my materials", nextQuestionId: 6}
    ]
};

const QUESTIONNAIRE_MAP = {
    1: Q1,
    2: Q2,
    3: Q3,
    4: Q4,
    5: Q5
};

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);

        this.updateQuestionnaireResponses = this.updateQuestionnaireResponses.bind(this);
        this.state = {
            questionnaireResponses: [],
            questionToDisplayId: 1
        }
    }

    updateQuestionnaireResponses(responses, nextQuestionId) {
        const updatedQuestionnaireResponses = this.state.questionnaireResponses.concat(responses);
        this.setState({
            questionnaireResponses: updatedQuestionnaireResponses,
            questionToDisplayId: nextQuestionId
        });
    }

    render() {
        const questionnaireObject = QUESTIONNAIRE_MAP[this.state.questionToDisplayId];

        return (
            <div className="container">
                <QuestionnaireButtonGroup
                    buttonObjects={questionnaireObject.buttonObjects}
                    isMultiSelect={questionnaireObject.multiSelect}
                    questionnaireGroupTitle={questionnaireObject.title}
                    updateQuestionnaireResponses={this.updateQuestionnaireResponses}
                />
            </div>
        );
    }
}

export default Questionnaire;