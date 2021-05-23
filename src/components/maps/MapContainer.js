import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import tw from "twin.macro";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const initialCenter= {
  lat: -13.5225335,
  lng: -71.9766696  
};

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)`text-2xl sm:text-4xl font-bold`;
const Subheading = tw.h6`text-primary-500 opacity-75`;
const Heading = tw.h5`text-primary-500`;

const subheading = 'Ubicación';
const title= 'CENTRO DE CONCILIACIÓN EXTRAJUDICIAL EX LEGE';
export class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (      
        <Container>
           <Content>
           <TextContainer>
            <Heading>{subheading} Cusco</Heading>
          </TextContainer>
                <Map google={this.props.google} zoom={14}
                      initialCenter={initialCenter}
                      >
          
                  <Marker   title={title} 
                            position={initialCenter}
                            name={title} />
          
                </Map>
            </Content>
        </Container>      
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqTAXHCx7BRXRF_D0nkjYksZCthMl6Vto'
})(MapContainer)