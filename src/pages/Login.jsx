

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../components/styles/login.css'

const Login = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [responseData, setResponseData] = useState(null);


    const handleLogin = async () => {

        if (!email || !password) return

        const url = 'http://localhost:3000/users/login';
        const dados = {
            email: email,
            password: password,

        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),
            });

            if (response.status === 500) {
                return console.log(" erro interno no servidor")
            }
            if (response.status === 400) {
                setError(true);
                cleanFields();
            }

            if (response.status === 200) {

                setError(false)
                const user = await response.json();
                setResponseData(user);
                localStorage.setItem('currentUser', JSON.stringify(user));

                if (user.perfil === "user") {
                    return navigate("/home")
                }
                return navigate("/perfil")

            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };


    const cleanFields = () => {

        setEmail("");
        setPassword("");


    }



    return (
        <div className='containeer'>
            <div >

                <h1>Login</h1>

                <form className='flex' >
                    <input
                        type="email"
                        name="email"
                        placeholder='Insira seu usuario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='Insira sua password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <h2 className={`error ${error === false ? 'invisible' : "visible"}`} >Email ou password invalidos</h2>


                </form>
                <button onClick={handleLogin} >Logar</button>

                <p> Não tem uma conta? <Link to="/cadastro">cadastrar</Link></p>
            </div>

        </div>
    )
}

export default Login;