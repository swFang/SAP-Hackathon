import React from 'react';
import QuestionnaireTextbox from './QuestionnaireTextbox';
import QuestionnairePostingHeaders from './QuestionnairePostingHeaders';
import QuestionnaireNextButton from './QuestionnaireNextButton';

class QuestionnairePostingInitial extends React.Component {
    constructor(props) {
        super(props);

        this.getTextBoxValues = this.getTextBoxValues.bind(this);
        this.state = {
            whatIsNeededRef: React.createRef(),
            detailsRef: React.createRef()
        };
    }

    getTextBoxValues() {
        let textBoxValues = [];
        textBoxValues.push(this.state.whatIsNeededRef.current.getTextboxValue());
        textBoxValues.push(this.state.detailsRef.current.getTextboxValue());
        this.props.saveTextBoxValues(textBoxValues);
    }

    render() {
        return (
            <div>
                <QuestionnairePostingHeaders
                    tag={this.props.tag}
                    title={this.props.title}
                />
                <QuestionnaireTextbox ref={this.state.whatIsNeededRef} variant="standard" title="Please give your posting a title"/>
                <QuestionnaireTextbox ref={this.state.detailsRef} variant="tall" title="Tell us more about what you need"/>
                <QuestionnaireNextButton nextClicked={this.getTextBoxValues}/>
            </div>
        );
    }
}

export default QuestionnairePostingInitial;