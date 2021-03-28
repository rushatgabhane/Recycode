import React, { useEffect, useState } from 'react';
import config from "../../config/map-key.json"
import facilities from "../../config/facilities"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export function Maps(props) {
    const [currentPos, setPos] = useState()
    const [hasLoaded, setLoaded] = useState(false)
    //const [showInfoWindow, setInfoWindow] = useState(false)
    //const [activeMarker, setActiveMarker] = useState()
    //const [selectedFacil, setSelectedFacil] = useState()

    // gets current location of user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                setPos(pos)
                setLoaded(true)
            }

        )
    }
    /*
    const onMarkerClicked = (mark) => {
        setSelectedFacil(facilities.find((facil) =>
            facil.position.lat == mark.position.lat
        ))
        setInfoWindow(true)
    } */

    return (
        (hasLoaded && <Map
            google={props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{
                lat: currentPos.lat,
                lng: currentPos.lng
            }}

        >
            <Marker position={{
                lat: currentPos.lat,
                lng: currentPos.lng
            }} onClick={() => { }} />

            {facilities.map((mark, index) =>
                <Marker key={index} position={{ lat: mark.position.lat, lng: mark.position.lng }} onClick={() => { }}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }} >


                </Marker>

            )}


        </Map>
        )
    );
}
export default GoogleApiWrapper({
    apiKey: config.map_api
})(Maps);