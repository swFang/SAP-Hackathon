import React from 'react';
import QuestionnaireTextbox from './QuestionnaireTextbox';
import QuestionnairePostingHeaders from './QuestionnairePostingHeaders';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import './QuestionnaireContactForm.css';

class QuestionnaireContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.getTextBoxValues = this.getTextBoxValues.bind(this);
        this.state = {
            locationInputRef: React.createRef(),
            timeInputRef: React.createRef(),
            contactInputRef: React.createRef()
        };
    }

    getTextBoxValues() {
        let textBoxValues = [];
        textBoxValues.push(this.state.locationInputRef.current.getTextboxValue());
        textBoxValues.push(this.state.timeInputRef.current.getTextboxValue());
        textBoxValues.push(this.state.contactInputRef.current.getTextboxValue());
        this.props.saveTextBoxValues(textBoxValues);
    }

    render() {
        return (
            <div>
                <QuestionnairePostingHeaders
                    tag={this.props.tag}
                    title={this.props.title}
                />
                <div className="inputs">
                    <div className="individualInput">
                        <QuestionnaireTextbox variant="standard" ref={this.state.locationInputRef} title="Where do you need this delivered?"/>
                    </div>
                    <div className="individualInput">
                        <QuestionnaireTextbox variant="standard" ref={this.state.timeInputRef} title="When do you need this by?"/>
                    </div>
                    <div className="individualInput">
                        <QuestionnaireTextbox variant="standard" ref={this.state.contactInputRef} title="How can we contact you?"/>
                    </div>
                </div>
                <QuestionnaireNextButton nextClicked={this.getTextBoxValues}/>
            </div>
        );
    }
}

export default QuestionnaireContactForm;