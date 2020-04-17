import React from 'react';

class QuestionnaireFinalizeValues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reviewValues">
                <h5>Name of your post:</h5>
                <p>{this.props.postName}</p>

                <h5>Posting description:</h5>
                <p>{this.props.description}</p>

                <h5>Location:</h5>
                <p>{this.props.location}</p>

                <h5>Deadline for completion:</h5>
                <p>{this.props.date}</p>

                <h5>Contact Information:</h5>
                <p>{this.props.contactInfo}</p>
            </div>
        );
    }
}

export default QuestionnaireFinalizeValues;