import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const EditProfile = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) return alert("todos os campos devem ser ");


        const url = `http://localhost:3000/users/${currentUser.id}`

        const dados = {
            name: name,
            email: email,
            password: password
        }
        try {

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),

            });

            if (response.status == 200) {

                const user = await response.json();
                console.log(user)
                localStorage.setItem('currentUser', JSON.stringify(user));

                 alert("Usuario actualizado com sucesso!")
               //  return window.location.reload()

            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }



    useEffect(() => {

        setName(currentUser.name);
        setEmail(currentUser.email);
        setPassword(currentUser.password);

    }, []);
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
                <button type="submit">Salvar</button>

            </form>
        </div>
    )
}

export default EditProfile