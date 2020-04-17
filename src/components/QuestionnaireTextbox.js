import React from 'react';
import './QuestionnaireTextbox.css';

class QuestionnaireTextbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div class="title">
                {this.props.title}
            </div>
            <textarea class="text" type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        );
    }
}

export default QuestionnaireTextbox;