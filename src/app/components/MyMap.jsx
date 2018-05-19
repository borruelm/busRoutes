import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;
const copaniesUrl = "http://webservices.nextbus.com/service/publicXMLFeed?command=agencyList";

class MyMap extends React.Component {
  constructor(props){
    super(props);
    this.state = { center : { lat: 37.7749, lng: -122.4194 },
      zoom:13,
      myApiKey: 'AIzaSyBaS4svRC81gqsDz6vzn_Kb7cVSirN51w0',
      companiesList :''
    };
  }

  render() {
    var cmpNames = getAgencyList();

    return (
      <div className="myMap">
        <h3>Map and routes</h3>
        <br />
        <div className='google-map'>
          <GoogleMapReact
            apiKey= {this.state.myApiKey}
            defaultCenter={ this.state.center }
            defaultZoom={ this.state.zoom }>
            <AnyReactComponent
            lat={ 37.7749}
            lng={ -122.4194 }
            text={ 'Where is Martin?' }
          />
          </GoogleMapReact>
        </div>
        <div>
        companies:
          <b> { this.state.companiesList }</b>
        </div>
      </div>
    );
  }
};


export const getAgencyList = () => {
    fetch(copaniesUrl)
    .then((response) => {
      console.log(response.text());
      return response.text();
    }
    ,(error) => {
      console.log(error);
    });

  }


export default MyMap;
