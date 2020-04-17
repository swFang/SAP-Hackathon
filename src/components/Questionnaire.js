import React from 'react';
import QuestionnaireButtonGroup from './QuestionnaireButtonGroup';
import QuestionnaireEndGroup from './QuestionnaireEndGroup';
import QuestionnairePostingInitial from './QuestionnairePostingInitial';
import QuestionnaireContactForm from './QuestionnaireContactForm';
import QuestionnaireFinalize from './QuestionnaireFinalize';
import QuestionnairePostingDone from './QuestionnairePostingDone';
import './Questionnaire.css';

const howWeCanHelpTags = ["Need PPEs", "Need Materials to Make PPE", "Acquiring Household Goods", "Picking up Groceries or Medication", "Volunteers"];
const apiTags = ["make_PPE", "PPE_mats", "Household_goods", "Pickup_stuffs", "Pickup_stuffs"];

const Q1 = {
    title: "What are you here to do?",
    multiSelect: false,
    buttonObjects: [
        {id: "1_1", title: "I can volunteer time to help", nextQuestionId: 3},
        {id: "1_2", title: "I need some help", nextQuestionId: 2}
    ]
};

const Q2 = {
    title: "How can we help you?",
    multiSelect: false,
    buttonObjects: [
        {id: "2_0", title: howWeCanHelpTags[0], nextQuestionId: 6},
        {id: "2_1", title: howWeCanHelpTags[1], nextQuestionId: 6},
        {id: "2_2", title: howWeCanHelpTags[2], nextQuestionId: 6},
        {id: "2_3", title: howWeCanHelpTags[3], nextQuestionId: 6},
        {id: "2_4", title: howWeCanHelpTags[4], nextQuestionId: 6}
    ]
};

const Q3 = {
    title: "What type of equipment do you have access to?",
    multiSelect: false,
    buttonObjects: [
        {id: "3_1", title: "I have a 3D printer", nextQuestionId: 4},
        {id: "3_2", title: "I have a sewing machine", nextQuestionId: 4},
        {id: "3_3", title: "I don't have equipment but I can still help", nextQuestionId: 4}
    ]
};

const Q4 = {
    title: "Do you have material or food that you can donate?",
    multiSelect: true,
    buttonObjects: [
        {id: "4_1", title: "Personal protective equipment", nextQuestionId: 5},
        {id: "4_2", title: "Cloth for masks", nextQuestionId: 5},
        {id: "4_3", title: "3D printing material", nextQuestionId: 5},
        {id: "4_4", title: "Excess non-perishable food", nextQuestionId: 5},
        {id: "4_5", title: "Unfortunately not", nextQuestionId: 5}
    ]
};

const Q5 = {
    title: "Do you have a way to transport material?",
    multiSelect: false,
    buttonObjects: [
        {id: "5_1", title: "I can transport", nextQuestionId: "end"},
        {id: "5_2", title: "I need help to transport some materials", nextQuestionId: "end"},
        {id: "5_3", title: "I need someone to pickup my materials", nextQuestionId: "end"}
    ]
};

const Q6 = {
    title: "How can we help you?"
};

const END = {
    title: "Great!",
    subtitle: "Based on your responses, we've gathered a list of postings and resources on how you can help your community fight COVID-19!",
    endText: "As always, please remember to socially distance!",
    potentialSolutions: [
        {
            title: "Help produce protective equipment",
            links: [
                {body: "> How to 3D print or sew face masks", hyperlink: "https://engineering.rowan.edu/research-centers/mask/index.html"},
            ],
            imageLink: "./mask.svg"
        },
        {
            title: "Help pick up groceries or medication",
            links: [
                {body: "> Balancing nutrients during a lockdown", hyperlink: "http://www.emro.who.int/nutrition/nutrition-infocus/nutrition-advice-for-adults-during-the-covid-19-outbreak.html"}
            ],
            imageLink: "./basket.svg"
        },
        {
            title: "Donate Supplies",
            links: [
                {body: "> Where to donate PPEs in your local area", hyperlink: "https://www.cbsnews.com/news/coronavirus-how-to-donate-personal-protective-equipment-ppe-health-care-workers/"}
            ],
            imageLink: "./box.svg"
        },
        {
            title: "Volunteer your time",
            links: [
                {body: "You're on your way to helping with COVID-19!", hyperlink: "#"}
            ],
            imageLink: "./hands.svg"
        }
    ]
}

const QUESTIONNAIRE_MAP = {
    1: Q1,
    2: Q2,
    3: Q3,
    4: Q4,
    5: Q5,
    6: Q6,
    "end": END
};

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);

        this.updateQuestionnaireResponses = this.updateQuestionnaireResponses.bind(this);
        this.postingInitialToContact = this.postingInitialToContact.bind(this);
        this.contactFormSubmit = this.contactFormSubmit.bind(this);
        this.submitPosting = this.submitPosting.bind(this);
        this.state = {
            questionnaireResponses: [],
            questionToDisplayId: 1,
            postingTextInformation: [],
        }
    }

    updateQuestionnaireResponses(responses, nextQuestionId) {
        const updatedQuestionnaireResponses = this.state.questionnaireResponses.concat(responses);
        this.setState({
            questionnaireResponses: updatedQuestionnaireResponses,
            questionToDisplayId: nextQuestionId
        });
    }

    postingInitialToContact(textBoxInformation) {
        this.setState({
            questionToDisplayId: 7,
            postingTextInformation: this.state.postingTextInformation.concat(textBoxInformation)
        });
    }

    contactFormSubmit(textBoxInformation) {
        this.setState({
            questionToDisplayId: 8,
            postingTextInformation: this.state.postingTextInformation.concat(textBoxInformation)
        });
        console.log(this.state.postingTextInformation.concat(textBoxInformation));
    }

    submitPosting() {
        this.setState({
            questionToDisplayId: "end_posting"
        })
    }

    render() {
        const displayId = this.state.questionToDisplayId;
        const questionnaireObject = QUESTIONNAIRE_MAP[displayId];

        // This specifically grabs the response index at index 1
        // ultra hacky
        let tagIndex;
        if (this.state.questionnaireResponses.length == 2) {
            const responseId = this.state.questionnaireResponses[1];
            tagIndex = responseId.substr(responseId.length - 1);
        };

        let questionnaireGroup;

        if (displayId !== "end" && displayId !== 6 && displayId !== 7 && displayId !== 8 && displayId !== "end_posting") {
            questionnaireGroup = <QuestionnaireButtonGroup
                buttonObjects={questionnaireObject.buttonObjects}
                isMultiSelect={questionnaireObject.multiSelect}
                questionnaireGroupTitle={questionnaireObject.title}
                updateQuestionnaireResponses={this.updateQuestionnaireResponses}
            />;
        }
        else if (displayId == "end"){
            questionnaireGroup = <QuestionnaireEndGroup
                endGroup={END}
                responseValues={this.state.questionnaireResponses}
            />;
        }
        else if (displayId == 6) {
            questionnaireGroup = <QuestionnairePostingInitial
                title="How can we help you?"
                tag={howWeCanHelpTags[tagIndex]}
                saveTextBoxValues={this.postingInitialToContact}
            />
        }
        else if (displayId == 7) {
            questionnaireGroup = <QuestionnaireContactForm
                title="How can we help you?"
                tag={howWeCanHelpTags[tagIndex]}
                saveTextBoxValues={this.contactFormSubmit}
            />
        }
        else if (displayId == 8) {
            questionnaireGroup = <QuestionnaireFinalize
                postName={this.state.postingTextInformation[0]}
                description={this.state.postingTextInformation[1]}
                location={this.state.postingTextInformation[2]}
                date={this.state.postingTextInformation[3]}
                contactInfo={this.state.postingTextInformation[4]}
                submitPosting={this.submitPosting}
                tag={apiTags[tagIndex]}
            />
        }
        else if (displayId == "end_posting") {
            questionnaireGroup = <QuestionnairePostingDone/>
        }

        return (
            <div className="container">
                {questionnaireGroup}
            </div>
        );
    }
}

export default Questionnaire;