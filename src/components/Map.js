import React, { useState } from 'react';
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

    const [activeRoom, setActiveRoom] = useState(null);

    return (
        <div className="map__container">
            <MapContainer center={[51.51702295890256, -0.1276989410161924]} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {roomsData.features.map(room => (
                    <Marker
                        key={room.id}
                        position={[
                            room.geometry.coordinates[0],
                            room.geometry.coordinates[1]
                        ]}
                        onClick={() => {
                            setActiveRoom(room);
                        }}
                        icon={icon}
                    />
                ))}

                {activeRoom && (
                    <Popup
                        position={[
                            activeRoom.geometry.coordinates[0],
                            activeRoom.geometry.coordinates[1]
                        ]}
                        onClose={ () => { setActiveRoom(null);}}
                    >
                        <div>
                            <h2>{activeRoom.title}</h2>
                            <p>{activeRoom.price}</p>
                        </div>
                    </Popup>
                )}

            </MapContainer>
        </div>
    );
};

export default Map;
