import React from 'react';
import QuestionnaireButtonGroup from './QuestionnaireButtonGroup';

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const testButtonObjects = [
            {id: 1, title: "I can volunteer time to help"},
            {id: 2, title: "I need some help"}
        ];

        return (
            <QuestionnaireButtonGroup
                buttonObjects={testButtonObjects}
                isMultiSelect={false}
            />
        );
    }
}

export default Questionnaire;