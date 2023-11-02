

import { Link, useNavigate } from 'react-router-dom'
import '../components/styles/userRegistation.css'

import React, { useState } from 'react'

const UserRegistration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navegate = useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!name || !email || !password) return alert("todos os campos devem ser ")

        const url = `http://localhost:3000/users`

        const dados = {
            name: name,
            perfil: "user",
            email: email,
            password: password
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

                alert("Usuario cadastrado com sucesso!")
                return navegate("/")

            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }



    return (
        <div className='user-registration-container'>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <button type="submit">Cadastrar</button>
                <p>já tem uma conta? <Link to="/">login</Link></p>
            </form>
        </div>
    )
}

export default UserRegistration