import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';



const SingleComment = ({ rating }) => {
    return (
        <li key={rating.id} className='flex0'>

            <span id='profile'>
                <BsPersonCircle />
            </span>

            <div>
                <p><span>{rating.nameUser}</span></p>
                <p> <FaStar />{rating.rating}</p>
                <p>{rating.coments}</p>
            </div>
        </li>
    )
}

export default SingleComment