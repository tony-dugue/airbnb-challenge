import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import SearchDate from './SearchDate';

import { Button } from '@material-ui/core';

function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">

            <div className="banner__search">

                {showSearch && <SearchDate />}

                <Button 
                    onClick={ () => setShowSearch(!showSearch) }
                    className="banner__searchButton" 
                    variant="outlined">
                        {showSearch ? "Masquer" : "Ajouter des dates"}
                </Button>

            </div>

            <div className="banner__info">
                <h1>Sortez et faites marcher votre imagination</h1>
                <h5>Voyagez autrement et explorer les trésors cachés de votre région.</h5>
                <Button variant="outlined" onClick={ () => history.push('/search') }>Explorer les alentours</Button>
            </div>

        </div>
    )
}

export default Banner;
