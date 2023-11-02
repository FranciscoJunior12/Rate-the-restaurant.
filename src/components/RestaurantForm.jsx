


import React, { useState } from 'react';

import './styles/RestaurantForm.css'

function RestaurantForm() {
    const [formData, setFormData] = useState({
        imagem: '',
        nome: '',
        descricao: '',
        localizacao: '',
        tipoCozinha: '',
        horarioFuncionamento: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleAddPost = async () => {

        const post = new FormData()
        post.append('name', nameInput.value)
        post.append('age', age.value)
        post.append('gender', gender.value)
        post.append('date', date.value)
        post.append('location', locationInput.value)
        post.append('description', description.value)
        post.append('image', image.files[0])
    
        try {
            const data = await addPost(post)
            form.reset()
            if (data) {
                return window.location.href = 'home.html'
                // modalContent.classList.toggle('hide')
            }
        } catch (error) {
            console.error('Erro na publicacao:', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações
        console.log('Dados do restaurante:', formData);
    };

    return (
        <div className='restaurant-form-container'>
            <h2>Cadastro de Restaurante</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        name="descricao"
                        value={formData.descricao}
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
                    <label>Horário de Funcionamento:</label>
                    <input
                        type="text"
                        name="horarioFuncionamento"
                        value={formData.horarioFuncionamento}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Cadastrar Restaurante</button>
            </form>
        </div>
    );
}

export default RestaurantForm;
