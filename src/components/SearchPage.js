import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import Map from "./Map";
import { Button } from '@material-ui/core';

import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';
import room4 from '../images/room4.jpg';
import room5 from '../images/room5.jpg';
import room6 from '../images/room6.webp';
import room7 from '../images/room7.jpg';

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

                    <SearchResult
                        img={room1}
                        location="Chambre privée dans le centre de Londres"
                        title="Spacieuse maison de style Edouardienne"
                        description="1 voyageur · Studio · 1 salle de bain · 1 lit"
                        options="Wifi · Cuisine · Parking gratuit"
                        star={4.73}
                        price="£30 / nuit"
                        total="£117 total"
                    />

                    <SearchResult
                        img={room2}
                        location="Chambre dans une résidence de tourisme à Stratford"
                        title="Luxueux Appartement Studio"
                        description="2 voyageurs · 1 chambre · 2 lits · 1 salle de bain privée"
                        options="Wifi · Climatisation · Parking gratuit"
                        star={4.3}
                        price="£40 / nuit"
                        total="£157 total"
                    />

                    <SearchResult
                        img={room3}
                        location="Chambre privée à Borough londoniene d'Islington"
                        title="Comfortable Room in King's Cross Zone 1 Eurostar"
                        description="4 voyageurs · 3 chambres · 4 lits · 2 salles de bain partagées"
                        options="Wifi · Cuisine · Lave-linge · Sèche-linge"
                        star={3.8}
                        price="£35 / nuit"
                        total="£207 total"
                    />

                    <SearchResult
                        img={room4}
                        location="Logement entier dans le centre de Londres"
                        title="A 30 mins de Oxford Street, Excel London"
                        description="6 voyageurs · 4 chambres · 6 lits · 3 salles de bain"
                        options="Wifi · Ascenseur · Arrivée autonome"
                        star={4.1}
                        price="£55 / nuit"
                        total="£320 total"
                    />

                    <SearchResult
                        img={room5}
                        location="Logement entier à Pimlico"
                        title="Still Life Angel Deluxe"
                        description="2 voyageurs · 1 chambre · 1 lit · 1 salle de bain"
                        options="Wifi · Cuisine · Ascenseur"
                        star={5}
                        price="£60 / nuit"
                        total="£450 total"
                    />

                    <SearchResult
                        img={room6}
                        location="Chambre privée à Whitechapel/Brick Lane"
                        title="Bright Room with Balcony"
                        description="2 voyageurs · 1 chambre · 1 lit · 1 salle de bain partagée"
                        options="Wifi · Cuisine · Lave-linge · Sèche-linge"
                        star={4.23}
                        price="£65 / nuit"
                        total="£480 total"
                    />

                    <SearchResult
                        img={room7}
                        location="Logement entier à The West End"
                        title="Appartement de luxe 5 étoiles"
                        description="3 voyageurs · 2 chambres · 3 lits · 1 salle de bain partagée"
                        options="Wifi · Cuisine · Lave-linge"
                        star={3.85}
                        price="£90 / nuit"
                        total="£650 total"
                    />
                </div>

                <div className="searchPage__map">
                    <Map />
                </div>

            </div>

        </div>
    )
}

export default SearchPage;
