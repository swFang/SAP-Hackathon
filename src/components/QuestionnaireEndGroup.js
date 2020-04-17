import React from 'react';
import QuestionnaireRecommendation from './QuestionnaireRecommendation';
import GetStartedHelpingButton from './GetStartedHelpingButton';
import './QuestionnaireEndGroup.css';

class QuestionnaireEndGroup extends React.Component {
    constructor(props) {
        super(props);
        this.generateRecommendations = this.generateRecommendations.bind(this);
        this.generateApiTags = this.generateApiTags.bind(this);
        this.state = {
            apiTags: ["make_PPE", "PPE_mats", "Household_goods", "Pickup_stuffs", "Pickup_stuffs"]
        }
    }

    generateApiTags() {
        const responseValues = this.props.responseValues;
        const apiTags = this.state.apiTags;
        let selectedTagsArray = [];

        // API Tag generation
        if (responseValues.includes("3_1") || responseValues.includes("3_2")) {
            selectedTagsArray.push(apiTags[0]);
        }

        if (responseValues.includes("4_1") || responseValues.includes("4_2") || responseValues.includes("4_3")) {
            selectedTagsArray.push(apiTags[1]);
        }

        if (responseValues.includes("4_4")) {
            selectedTagsArray.push(apiTags[2]);
        }

        if (responseValues.includes("5_1")) {
            selectedTagsArray.push(apiTags[3]);
        }
        return selectedTagsArray;
    }

    generateRecommendations() {
        let recommendations = [];
        const responseValues = this.props.responseValues;

        // Recommendations generation
        if (responseValues.includes("3_1") || responseValues.includes("3_2")) {
            const solution = this.props.endGroup.potentialSolutions[0];
            recommendations.push(
                <QuestionnaireRecommendation
                    title={solution.title}
                    links={solution.links}
                    imageLink={solution.imageLink}
                />
            );
        }

        if (responseValues.includes("5_1") || responseValues.includes("5_2") || responseValues.includes("5_3")) {
            const solution = this.props.endGroup.potentialSolutions[1];
            recommendations.push(
                <QuestionnaireRecommendation
                    title={solution.title}
                    links={solution.links}
                    imageLink={solution.imageLink}
                />
            );
        }

        if (responseValues.includes("4_1") || responseValues.includes("4_2") || responseValues.includes("4_3") || responseValues.includes("4_4")) {
            const solution = this.props.endGroup.potentialSolutions[2];
            recommendations.push(
                <QuestionnaireRecommendation
                    title={solution.title}
                    links={solution.links}
                    imageLink={solution.imageLink}
                />
            );
        }

        // Add volunteer time regardless
        const solution = this.props.endGroup.potentialSolutions[3];
        recommendations.push(
            <QuestionnaireRecommendation
                title={solution.title}
                links={solution.links}
                imageLink={solution.imageLink}
            />
        );

        return recommendations;
    }

    render() {
        return (
            <div>
                <h4 className="endText">{this.props.endGroup.title}</h4>
                <h5 className="endText">{this.props.endGroup.subtitle}</h5>
                {this.generateRecommendations()}
                <GetStartedHelpingButton
                    selectedTags={this.generateApiTags()}
                />
            </div>
        );
    }
}

export default QuestionnaireEndGroup;