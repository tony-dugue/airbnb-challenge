import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import Map from "./Map";
import { Button } from '@material-ui/core';
import * as roomsData from "../data/rooms.json";

function SearchPage() {

    return (
        <div className="searchPage">

            <div className="searchPage__listings">

                <div className="searchPage__left">

                    <div className="searchPage__info">
                        <p>62 séjours · 26 août au 30 août · 2 personnes</p>
                        <h1>Séjours à proximité</h1>
                        <Button variant="outlined">Conditions d'annulation flexibles</Button>
                        <Button variant="outlined">Type de logement</Button>
                        <Button variant="outlined">Prix</Button>
                        <Button variant="outlined">Réservation instantanée</Button>
                        <Button variant="outlined">Plus de filtres</Button>
                    </div>

                    {roomsData.features.map(room => (
                        <SearchResult
                            key={room.id}
                            img={room.image}
                            location={room.location}
                            title={room.title}
                            description={room.description}
                            options={room.options}
                            star={room.star}
                            currency={room.currency}
                            price={room.price}
                            total={room.total}
                        />
                    ))}
                </div>

                <div className="searchPage__map">
                    <Map />
                </div>

            </div>

        </div>
    )
}

export default SearchPage;
