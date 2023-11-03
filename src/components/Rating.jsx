import React, { useContext, useState } from 'react'
import './styles/coments.css'


import { DataContext } from '../context/GlobalData';

const Rating = ({ idRestaurant }) => {

    const { comment, setComment } = useContext(DataContext);
    const [rate, setRate] = useState();

    const { update, setUpdate, idRating } = useContext(DataContext)

    const handleSubmit = async () => {

        if (!comment || !rate) return;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'))



        const url = 'http://localhost:3000/ratings';
        const dados = {
            idUser: currentUser.id,
            nameUser: currentUser.name,
            idRestaurant: idRestaurant,
            coments: comment,
            rating: rate

        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),
            });

            if (response.status === 201) {
                updateRate()
                return window.location.reload()
            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }

    }

    const updateRate = async () => {

        const url = `http://localhost:3000/restaurants/increment/${idRestaurant}`;

        const dados = {

            rating: rate

        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),
            });

            if (response.status === 200) {

                console.log('updated');

            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }


    }


    const handleUpdate = async () => {
        if (!comment || !rate) return;

        // const currentUser = JSON.parse(localStorage.getItem('currentUser'))



        const url = `http://localhost:3000/ratings/${idRating}`;
        const dados = {
            coments: comment,
            rating: rate

        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),
            });

            if (response.status === 200) {
                setUpdate(false)
                return window.location.reload()
            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }




    }


    return (
        <div className="post-comments">
            <h2><span> Deixe o seu Comentário e Avaliação</span></h2>
            <textarea name="comment" id="coment" cols="65" rows="6" value={comment} onChange={(e) => {

                setComment(e.target.value)
            }}></textarea>
            <select className='select'
                onChange={(e) => { setRate(e.target.value) }} >
                <option selected disabled>selecione estrelas</option>
                <option value="0">0 Estrela</option>
                <option value="1">1 Estrela</option>
                <option value="2">2 Estrelas</option>
                <option value="3">3 Estrelas</option>
                <option value="4">4 Estrelas</option>
                <option value="5">5 Estrelas</option>
            </select>

            <button onClick={() => {

                if (!update) {
                    console.log('entre no submit')
                    handleSubmit()
                } else {
                    console.log('entre no update')
                    handleUpdate()
                }



            }}>submit</button>

        </div >
    )
}

export default Rating