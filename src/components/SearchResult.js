import React from 'react';
import './SearchResult.css';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({ img, location, title, description, options, star, price, currency, total }) {
    return (
        <div className="searchResult">

            <img src={img} alt="" />

            <FavoriteBorderIcon className="searchResult__heart" />

            <div className="searchResult__info">

                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                    <p>{options}</p>
                </div>

                <div className="searchResult__infoBottom">

                    <div className="searchResult__star">
                        <StarIcon className="searchResult__starIcon" />
                        <p><strong>{star}</strong></p>
                    </div>

                    <div className="searchResult__price">
                        <h2>{currency}{price} / nuit</h2>
                        <p>{currency}{total} total</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchResult;
