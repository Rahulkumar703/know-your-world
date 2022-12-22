import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../Components/CountryCard';

function Home() {

    const [countriesData, setCountriesData] = useState([]);

    async function apiCall() {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountriesData(response.data);
    }
    useEffect(() => {
        apiCall();
    }, []);

    return (
        <div>
            {countriesData.map((country, index) => {
                return (
                    <CountryCard
                        key={index}
                        name={country.name.common}
                        fullName={country.name.official}
                        isIndependent={country.independent}
                        currencyName={country.currencies}
                        capital={country.capital}
                        area={country.area}
                        map={country.maps?.googleMaps}
                        population={country.population}
                        continents={country.continents}
                        flag={country.flags}
                        startOfWeek={country.startOfWeek}
                    />
                )
            })}
        </div>
    );
}

export default Home;
