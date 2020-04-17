import React from 'react';
import QuestionnaireFinalizeValues from './QuestionnaireFinalizeValues';
import SubmitPostingButton from './SubmitPostingButton';
import './QuestionnaireFinalize.css';
import axios from 'axios';

class QuestionnaireFinalize extends React.Component {
    constructor(props) {
        super(props);
    }

    getParams() {
        const posting = {
            priority: 10,
            name: this.props.postName,
            description: this.props.description,
            poster: "dummy name",
            contact: this.props.contactInfo,
            location: {lat:1, long:1},
            date: "Fri Apr 17 2020 10:09:08 GMT-0700 (Pacific Daylight Time)",
            completion: false,
        }

        const tag = {
            name: this.props.tag
        }

        let res = {
            posting: posting,
            tag: tag,
        }

        return res; 
    }

    async submitPosting() {
        const param = this.getParams();
        console.log('clickin Submit Posting, params are ', param);
        try{
            const res = await axios.post("http://localhost:5000/addPosting", param);
        } catch(e) {
            console.log(e);
        }
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
                    onClick={this.submitPosting()}
                />
            </div>
        );
    }
}

export default QuestionnaireFinalize;