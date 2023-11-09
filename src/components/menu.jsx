import React, { useContext, useEffect, useState } from 'react'

import './styles/coments.css'

import SingleComment from './singleComment';


const Menu = ({ idRestaurant }) => {


    const [menus, setMenus] = useState([]);
    const [pratos, setPratos] = useState([]);

    const getRatings = async (url) => {

        const res = await fetch(url);
        const data = await res.json();


        setMenus(data);

    }


    useEffect(() => {

        const url = `http://localhost:3000/menus/`;
        getRatings(url);

    }, []);

    const getPratos = async (url) => {

        const res = await fetch(url);
        const data = await res.json();


        setPratos(data);

    }


    useEffect(() => {

        const url = `http://localhost:3000/menus/`;
        const url2 = `http://localhost:3000/pratos`;
        getRatings(url);
        getPratos(url2);

    }, []);






    return (

        <div className="post-comments">
            <h2><span>Nosso Menu</span></h2>
            {ratings.length > 0 ? (
                <ul>
                    {ratings
                        .filter((rating) => rating.idRestaurant == idRestaurant)
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

export default Menu;