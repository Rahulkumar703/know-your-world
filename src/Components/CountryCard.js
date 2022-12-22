import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

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
        flag } = props;
    return (
        <Link to={`/${name}`}>
            <div className='card'>
                <div className="flag">
                    <img src={flag} alt={`${name} flag`} />
                </div>
                <div className="country-name">
                    <div className="col">
                        <h1 className='common-name'>{name}</h1>
                        <h2 className='official-name'>{fullName}</h2>
                    </div>
                    <div className="col">
                        <h3 className="capital">{capital}</h3>
                        {/* <h3>{Object.keys(currencyName)[0]}</h3> */}
                    </div>
                </div>
                <div className="continent">
                    <p>{continents}</p>
                </div>
            </div>
        </Link>
    );
}

export default CountryCard;
