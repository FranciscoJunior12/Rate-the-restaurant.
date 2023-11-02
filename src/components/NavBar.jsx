import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import './styles/Navbar.css'

import { useState, useContext } from 'react';
import { DataContext } from '../context/GlobalData'


const NavBar = () => {
    const { filter, setFilter } = useContext(DataContext);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!search) return;

        console.log(filter)

        navigate(`/search?q=${search}`);
        setSearch("");



    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/home">
                    <span><IoRestaurantOutline /></span>The Rate Restaurant
                </Link>
            </h2>


            <form onSubmit={handleSubmit}>
                <select value={filter} onChange={(e) => {
                    setFilter(e.target.value)
                }} >
                    <option>Filter by</option>
                    <option value="Tipo de Cozinha" >Tipo de Cozinha</option>
                    <option value="Localização" >Localização</option>
                    <option value="Faixa Preço" >Faixa Preço</option>
                </select>

                <input type="text" placeholder='Busque um restaurante...'

                    value={search}

                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button type='submit'><BiSearchAlt2 /></button>

                <span>
                    <Link to="/perfil">
                        <BsPersonCircle />
                    </Link>
                </span>

                <span>
                    <Link to="/">
                        <BiLogOut />
                    </Link>
                </span>
            </form>
        </nav>
    )
}


export default NavBar;