import React, { useEffect, useState } from 'react'

import SingleComment from './singleComment';

const UserRating = () => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [ratings, setRatings] = useState([]);

    const getRatings = async (url) => {

        const res = await fetch(url);
        const data = await res.json();


        setRatings(data);

    }


    useEffect(() => {

        const url = `http://localhost:3000/ratings/`;
        getRatings(url);

    }, []);



    return (
        <div className='movie-page'>
            <div className="post-comments">
                <h2><span>Minhas Avaliações e Comentários </span></h2>
                {ratings.length > 0 ? (
                    <ul>
                        {ratings
                            .filter((rating) => rating.idUser == currentUser.id) // Filtra os ratings com base na condição
                            .map((filteredRating) => (
                                <SingleComment key={filteredRating.id} rating={filteredRating} />
                            ))}
                    </ul>
                ) : (
                    <p>Nenhum comentário disponível.</p>

                )}
            </div>
        </div>
    )
}

export default UserRating