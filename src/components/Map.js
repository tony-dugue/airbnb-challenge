import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import * as roomsData from "../data/rooms.json";
import 'leaflet/dist/leaflet.css';

export const icon = new Icon({
    iconUrl: "./house-marker.svg",
    iconSize: [50, 50]
});

const Map = () => {

    return (
        <div className="map__container">
            <MapContainer center={[51.51702295890256, -0.1276989410161924]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=..."
                />

                {roomsData.features.map(room => (
                    <Marker
                        key={room.id}
                        position={[
                            room.geometry.coordinates[0],
                            room.geometry.coordinates[1]
                        ]}
                        icon={icon}
                    >
                        <Popup>
                            <div className="popup">
                                <img className="popup__img" src={room.image} alt="" />
                                <p className="popup__title">{room.title}</p>
                                <p className="popup__price">{room.currency}{room.price} / nuit</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    );
};

export default Map;
