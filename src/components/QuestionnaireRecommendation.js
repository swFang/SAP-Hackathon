import React from 'react';

class QuestionnaireRecommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <img src={this.props.imageSrc}></img> */}
                <img src="./mask.svg"></img>
                <h4>Help produce protective equipment</h4>
                <a href>> How to produce masks with 3D printers</a>
                <a href>> How to sew </a>
            </div>
        );
    }
}

export default QuestionnaireRecommendation;