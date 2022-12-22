import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';


function Country() {

    const [countryData, setCountryData] = useState({});

    const { countryName } = useParams();

    async function apiCall() {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setCountryData(response.data[0]);
    }


    useEffect(() => {
        apiCall();
    }, []);



    return (
        <div>
            <CountryCard
                name={countryData.name?.common}
                fullName={countryData.name?.official}
                isIndependent={countryData.independent}
                currencyName={countryData.currencies}
                capital={countryData.capital}
                area={countryData.area}
                map={countryData.maps?.googleMaps}
                population={countryData.population}
                continents={countryData.continents}
                flag={countryData.flags}
                startOfWeek={countryData.startOfWeek}
            />
        </div>
    );

};

export default Country;
