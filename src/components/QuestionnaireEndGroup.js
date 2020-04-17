import React from 'react';
import QuestionnaireRecommendation from './QuestionnaireRecommendation';

class QuestionnaireEndGroup extends React.Component {
    constructor(props) {
        super(props);
        this.generateRecommendations = this.generateRecommendations.bind(this);
    }

    generateRecommendations() {
        let recommendations = [];
        for (let i = 0; i < this.props.endGroup.potentialSolutions.length; i++) {
            const solution = this.props.endGroup.potentialSolutions[i];
            recommendations.push(
                <QuestionnaireRecommendation
                    title={solution.title}
                    links={solution.links}
                    imageLink={solution.imageLink}
                />
            );
        }
        return recommendations;
    }

    render() {
        return (
            <div>
                <h4>{this.props.endGroup.title}</h4>
                <h5>{this.props.endGroup.subtitle}</h5>
                {this.generateRecommendations()}
                <h5>{this.props.endGroup.endText}</h5>
            </div>
        );
    }
}

export default QuestionnaireEndGroup;