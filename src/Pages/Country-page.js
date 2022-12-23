import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import './Country-page.css'


function Country() {

    const [countryData, setCountryData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { countryName } = useParams();

    async function apiCall() {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setCountryData(response.data[0]);
        setIsLoading(false);
    }


    useEffect(() => {
        apiCall();
    }, [countryName]);


    return (
        isLoading ? <Loader /> :
            <div className='country-page'>
                <div className="row">
                    <div className="flag">
                        {console.log(countryData)}
                        <img src={countryData.flags.svg} alt={`${countryData.flags.svg} flag`} />
                    </div>
                    <div className="basic-info">
                        <div className="name">
                            <p>Common Name : <b>{countryData.name.common}</b></p>
                            <p>Official Name :<b> {countryData.name.official}</b></p>
                            <p>Capital :<b> {countryData.capital}</b></p>
                            <p>Currency :<b> {Object.values(countryData.currencies)[0].name} ({Object.values(countryData.currencies)[0].symbol})</b></p>
                            <p>Population : <b>{(countryData.population) / 1000000} Million</b></p>
                        </div>
                    </div>
                </div>
                <div className="row-title">
                    <p>More Informations</p>
                </div>
                {/* <div className="row">
                    <p>More Informations</p>
                </div> */}
            </div>
    );

};

export default Country;
