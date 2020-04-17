import React from 'react';
import './QuestionnairePostingHeaders.css';

class QuestionnairePostingHeaders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headers">
                <h3>{this.props.title}</h3>
                <div className="tag">{this.props.tag}</div>
            </div>
        );
    }
}

export default QuestionnairePostingHeaders;