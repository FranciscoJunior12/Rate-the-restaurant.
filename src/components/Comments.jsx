import React, { useContext, useEffect, useState } from 'react'

import './styles/coments.css'

import SingleComment from './singleComment';


const Comments = ({ idRestaurant }) => {


    const [ratings, setRatings] = useState([]);

    const getRatings = async (url) => {

        const res = await fetch(url);
        const data = await res.json();


        setRatings(data);

    }


    useEffect(() => {

        const url = `http://localhost:3000/ratings/${idRestaurant}`;
        getRatings(url);

    }, []);






    return (

        <div className="post-comments">
            <h2><span>Comentários e Avaliações</span></h2>
            {ratings.length > 0 ? (
                <ul>
                    {ratings
                        .filter((rating) => rating.idRestaurant == idRestaurant) // Filtra os ratings com base na condição
                        .map((filteredRating) => (
                            <SingleComment key={filteredRating.id} rating={filteredRating} />
                        ))}
                </ul>
            ) : (
                <p>Nenhum comentário disponível.</p>
            )}
        </div>

    )
}

export default Comments;