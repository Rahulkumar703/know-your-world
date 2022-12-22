import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard(props) {
    const { name,
        fullName,
        isIndependent,
        currencyName,
        capital,
        area,
        map,
        population,
        continents,
        flag,
        startOfWeek } = props;
    // console.log(flag);
    return (
        <Link to={`/${name}`}>
            <div className='card'>
                {/* <img src={flag.svg} alt={`${name} flag`} width="400" height="auto" border="1" /> */}
                <h1>{name}</h1>
            </div>
        </Link>
    );
}

export default CountryCard;
