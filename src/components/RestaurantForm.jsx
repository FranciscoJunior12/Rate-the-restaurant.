


import React, { useState } from 'react';

import './styles/RestaurantForm.css'

function RestaurantForm() {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        details: '',
        price: '',
        localizacao: '',
        tipoCozinha: '',
        time: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const random = () => {

        const numeroAleatorio = Math.random();


        const numeroInteiro = Math.floor(numeroAleatorio * 6) + 1;

        return numeroInteiro;
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();



    //     // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações
    //     console.log('Dados do restaurante:', formData);
    // };



    const handleSubmit = async (e) => {

        e.preventDefault();

        //if (!formData.name || !email || !password) return alert("todos os campos devem ser ")

        const url = `http://localhost:3000/restaurants`
        const n1 = random();
        console.log(n1)

        const dados = {
            image: `${n1}.jpg`,
            name: formData.name,
            details: formData.details,
            price: formData.price,
            localizacao: formData.localizacao,
            tipoCozinha: formData.tipoCozinha,
            time: formData.time,
        }
        try {
 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),

            });

            if (response.status == 201) {

                alert("Restaurante cadastrado com sucesso!");
                //return navegate("/");

            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }
    return (
        <div className='restaurant-form-container'>
            <h2>Cadastro de Restaurante</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="image"

                    />
                </div>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Localização:</label>
                    <input
                        type="text"
                        name="localizacao"
                        value={formData.localizacao}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tipo de Cozinha:</label>
                    <input
                        type="text"
                        name="tipoCozinha"
                        value={formData.tipoCozinha}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Faixa de Preço:</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Horário de Funcionamento:</label>
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Cadastrar Restaurante</button>
            </form>
        </div>
    );
}

export default RestaurantForm;
