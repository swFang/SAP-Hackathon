import React from 'react';
import './QuestionnairePostingDone.css';

class QuestionnairePostingDone extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="doneText">
                <h3>Thank you for your posting!</h3>
                <h5 className="message">We will contact you when someone has taken on your posting.</h5>
            </div>
        );
    }
}

export default QuestionnairePostingDone;