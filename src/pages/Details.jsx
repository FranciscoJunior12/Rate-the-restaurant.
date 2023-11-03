import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

import "../components/styles/Details.css"
import NavBar from '../components/NavBar';
import Comments from '../components/Comments';
import Rating from '../components/Rating';
const Details = () => {

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);





    const getRestaurant = async () => {

        const url = `http://localhost:3000/restaurants/${id}`
        const res = await fetch(url);
        const data = await res.json();

        setRestaurant(data);
    }

    useEffect(() => {


        getRestaurant();


    }, [])

    return (
        <>
            <NavBar />
            <div className='movie-page'>
                {restaurant && (
                    <>

                        <Card restaurant={restaurant} showLink={false} />
                        <p className="tagline">{restaurant.name}</p>
                        <div className="info">
                            <h3>
                                <BsWallet2 /> Tipo Cozinha:
                            </h3>
                            <p>{restaurant.tipoCozinha}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <FaLocationDot /> Localização:
                            </h3>
                            <p>{restaurant.localizacao}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsHourglassSplit /> Horario de Funcionamento:
                            </h3>
                            <p>{restaurant.time}</p>
                        </div>
                        <div className="info description">
                            <h3>
                                <BsFillFileEarmarkTextFill /> Descrição:
                            </h3>
                            <p>{restaurant.details}</p>
                        </div>
                    </>



                )}

                <Comments idRestaurant={id} />
                <Rating idRestaurant={id} />
            </div>

        </>
    )
}

export default Details