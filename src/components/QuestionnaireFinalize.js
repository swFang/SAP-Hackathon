import React from 'react';
import QuestionnaireFinalizeValues from './QuestionnaireFinalizeValues';
import SubmitPostingButton from './SubmitPostingButton';
import './QuestionnaireFinalize.css';
import Geocode from "react-geocode";
import axios from 'axios';

class QuestionnaireFinalize extends React.Component {
    constructor(props) {
        super(props);
        this.getGeoLatLong = this.getGeoLatLong.bind(this);
        this.submitPosting = this.submitPosting.bind(this);
        this.getParams = this.getParams.bind(this);

        this.state = {
            lat: 0,
            long: 0
        }
    }

    getGeoLatLong(address) {
        console.log("test");
        Geocode.setApiKey("AIzaSyBiNLSs56-UkgDJDNu19wq_keRWBUIzkk4");
        Geocode.setLanguage("en");
        Geocode.setRegion("es");
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({lat: lat, long: lng});
                console.log(lat);
                console.log(lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    getParams() {
        const posting = {
            priority: 10,
            name: this.props.postName,
            description: this.props.description,
            poster: "dummy name",
            contact: this.props.contactInfo,
            location: {lat:this.state.lat, long:this.state.long},
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
        console.log(res);
        return res;
    }

    async submitPosting() {
        // Grab converted latitude and longitude
        this.getGeoLatLong(this.props.location);

        setTimeout(async () => {
            const param = this.getParams();
            console.log('clickin Submit Posting, params are ', param);
            try{
                const res = await axios.post("http://localhost:5000/addPosting", param);
            } catch(e) {
                console.log(e);
            }
        }, 1000)
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
                    submitPosting={this.submitPosting}
                />
            </div>
        );
    }
}

export default QuestionnaireFinalize;