import React from 'react';
import Button from 'react-bootstrap/Button';
import './SubmitPostingButton.css';
import Geocode from "react-geocode";

class SubmitPostingButton extends React.Component {
    constructor(props) {
        super(props);
        this.getGeoLatLong = this.getGeoLatLong.bind(this);
        this.makeApiCall = this.makeApiCall.bind(this);
        this.state = {
            buttonStyle: "default",
            latitude: 0,
            longitude: 0
        };
    }

    buttonOnClick() {
        if (this.state.buttonStyle === "default") {
            this.setState({buttonStyle: "clicked"});
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
                this.setState({latitude: lat});
                this.setState({latitude: lng});
                console.log(lat);
                console.log(lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    makeApiCall() {
        // Grab converted latitude and longitude
        this.getGeoLatLong(this.props.location);
        const location = {lat: this.state.latitude, long: this.state.longitude};

        // fetch("https://localhost:5000/addPostingData")
        //     .then(res)
        this.props.submitPosting();
    }

    render() {
        return (
            <Button className="submitPostingButton" variant={this.state.buttonStyle} onClick={this.makeApiCall}>Submit Posting</Button>
        );
    }
}

export default SubmitPostingButton;