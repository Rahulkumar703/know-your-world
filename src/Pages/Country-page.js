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
                <div className="col">
                    <div className="flag">
                        {console.log(countryData)}
                        <img src={countryData.flags.svg} alt={`${countryData.flags.svg} flag`} />
                    </div>
                    <div className="basic-info">
                        <div className="name">
                            <p><b>Common Name :</b> {countryData.name.common}</p>
                            <p><b>Official Name :</b> {countryData.name.official}</p>
                            <p><b>Capital :</b> {countryData.capital}</p>
                        </div>
                    </div>
                </div>
            </div>
    );

};

export default Country;
