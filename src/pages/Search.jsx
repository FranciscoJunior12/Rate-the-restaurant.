import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/GlobalData';
import { useSearchParams } from 'react-router-dom';

import '../components/styles/Grid.css'
import NavBar from '../components/NavBar';
import { IoRestaurantOutline } from 'react-icons/io5';
import Card from '../components/Card';

const Search = () => {
    const [searchParams] = useSearchParams();
    const { data, filter } = useContext(DataContext);

    const [filterData, setFilterData] = useState([])


    const query = searchParams.get("q");

    const getSearchedRestaurant = () => {

        console.log(data)
        if (filter === "Tipo de Cozinha") {

            const newData = data.filter((restaurant) => {
                return restaurant.tipoCozinha.toLowerCase().includes(query.toLowerCase())
            })

            return setFilterData(newData)
        }
        if (filter === "Localização") {

            const newData = data.filter((restaurant) => {
                return restaurant.localizacao.toLowerCase().includes(query.toLowerCase())
            })

            return setFilterData(newData)
        }
        if (filter === "Faixa Preço") {

            const newData = data.filter((restaurant) => {
                return restaurant.price <= parseInt(query)
            })

            return setFilterData(newData)
        }


        const newData = data.filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(query.toLowerCase())
        })

        return setFilterData(newData);



    }

    useEffect(() => {


        getSearchedRestaurant();


    }, [query]);

    return (
        <>
            <NavBar />
            <div className="container">

                <h2 className="h2">Resultados Para:  <span> {query}  </span>       <IoRestaurantOutline /> </h2>
                <div className="movies-container">
                    {filterData.length === 0 && <p>Caregando...</p>}
                    {filterData.length > 0 && filterData.map((restaurant) => <Card key={restaurant.id} restaurant={restaurant} />)}

                </div>

            </div>
        </>
    )
}

export default Search