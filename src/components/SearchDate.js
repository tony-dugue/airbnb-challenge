import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchDate.css';

import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// DATE PICKER COMPONENT (package react-date-picker et date-fns )
function SearchDate() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = { startDate: startDate, endDate: endDate, key: "selection" };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="searchDate">

            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <h2>Nombre de voyageurs<PeopleIcon /></h2>

            <input type="number" min={0} defaultValue={2} />

            <Button onClick={ () => history.push('/search') }>Rechercher sur airbnb</Button>

        </div>
    )
}

export default SearchDate;
