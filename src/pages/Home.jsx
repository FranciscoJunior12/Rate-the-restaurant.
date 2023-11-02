import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import Card from "../components/Card";
import { IoRestaurantOutline } from "react-icons/io5";
import { DataContext } from "../context/GlobalData";

import '../components/styles/Grid.css'

const Home = () => {

    const { setData } = useContext(DataContext);
    const [restaurants, setRestaurants] = useState([]);

    const getRestaurants = async (url) => {

        const res = await fetch(url);
        const data = await res.json();
        
        setData(data);
        setRestaurants(data);

    }


    useEffect(() => {

        const url = `http://localhost:3000/restaurants`;
        getRestaurants(url);

    }, []);


    return (
        <>
            <NavBar />
            <div className="container">

                <h2 className="h2">Restaurantes:            <IoRestaurantOutline /> </h2>
                <div className="movies-container">
                    {restaurants.length === 0 && <p>Caregando...</p>}
                    {restaurants.length > 0 && restaurants.map((restaurant) => <Card key={restaurant.id} restaurant={restaurant} />)}

                </div>

            </div>
        </>

    )
}

export default Home