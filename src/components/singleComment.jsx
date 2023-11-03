import React, { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { DataContext } from '../context/GlobalData';



const SingleComment = ({ rating }) => {


    const { setComment, setUpdate, setIdRating } = useContext(DataContext)

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));


    const handleUpdate = () => {
        setUpdate(true)
        setIdRating(rating.id)
        setComment(rating.coments)


    }

    const handleDelete = async () => {

      
        const url = `http://localhost:3000/ratings/${rating.id}`;


        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });

            if (response.status === 200) {
                
            
                return window.location.reload()
            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }

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
            {currentUser.id == rating.idUser ? <>
                <span className='delete' onClick={handleDelete}> <RiDeleteBin6Line /> </span>
                <span className='update' onClick={handleUpdate} > <RxUpdate /> </span>
            </> : ""
            }
        </li >
    )
}

export default SingleComment