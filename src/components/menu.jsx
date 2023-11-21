import React, { useContext, useEffect, useState } from 'react'

import './styles/coments.css'

import SingleComment from './singleComment';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { FaStar } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import Item from './Item';


const Menu = ({ idRestaurant }) => {


    const [menuItems, setMenuItems] = useState([]);


    const getMenuItems = async (url) => {

        const res = await fetch(url);
        const data = await res.json();


        setMenuItems(data);
        // console.log(menuItems)

    }

  



    useEffect(() => {

        const url = `http://localhost:3000/items`;

        getMenuItems(url);


    }, []);


    return (

        <div className="post-comments">
            <h2><span>Nosso Menu</span></h2>
            {menuItems.length > 0 ? (
                <ul>

                    {menuItems
                        .filter((item) => item.idRestaurante == idRestaurant)
                        .map((filteredItem) => (
                            <Item filteredItem={filteredItem} />
                        ))


                    }

                </ul>
            ) : (
                <p>Nenhum comentário disponível.</p>
            )}
        </div>

    )
}

export default Menu;