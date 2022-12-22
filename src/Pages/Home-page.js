import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../Components/CountryCard';
import './Home-Page.css';
import Loader from '../Components/Loader';

function Home() {

    const [countriesData, setCountriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function apiCall() {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountriesData(response.data);
        setIsLoading(false);
    }
    useEffect(() => {
        apiCall();
    }, []);

    return (
        isLoading ? <Loader /> :
            <div className='home-page'>
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
                            flag={country.flags.svg}
                            startOfWeek={country.startOfWeek}
                        />
                    )
                })}
            </div>
    );
}

export default Home;
