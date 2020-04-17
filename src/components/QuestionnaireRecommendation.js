import React from 'react';
import './QuestionnaireRecommendation.css';

class QuestionnaireRecommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    generateLinksArray() {
        let linksArray = [];
        for (let i = 0; i < this.props.links.length; i++) {
            const link = this.props.links[i];
            linksArray.push(
                <div>
                    <a href={link.hyperlink}>{link.body}</a>
                    <br/>
                </div>
            );
        }
        return linksArray;
    }

    render() {
        return (
            <div className="recommendationContainer">
                <img className="recommendationImage" src={this.props.imageLink}/>
                <div className="recommendationText">
                    <h4>{this.props.title}</h4>
                    {this.generateLinksArray()}
                </div>
            </div>
        );
    }
}

export default QuestionnaireRecommendation;