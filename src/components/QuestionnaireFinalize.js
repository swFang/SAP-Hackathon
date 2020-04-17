import React from 'react';
import QuestionnaireFinalizeValues from './QuestionnaireFinalizeValues';
import SubmitPostingButton from './SubmitPostingButton';
import './QuestionnaireFinalize.css';

class QuestionnaireFinalize extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="finalizeTitles">
                    <h3>Almost done!</h3>
                    <h5>Please verify the information you have provided.</h5>
                </div>
                <QuestionnaireFinalizeValues
                    postName={this.props.postName}
                    description={this.props.description}
                    location={this.props.location}
                    date={this.props.date}
                    contactInfo={this.props.contactInfo}
                />
                <SubmitPostingButton
                    postName={this.props.postName}
                    description={this.props.description}
                    location={this.props.location}
                    date={this.props.date}
                    contactInfo={this.props.contactInfo}
                    submitPosting={this.props.submitPosting}
                />
            </div>
        );
    }
}

export default QuestionnaireFinalize;