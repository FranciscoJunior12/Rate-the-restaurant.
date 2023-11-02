import { BsStarFill } from "react-icons/bs";
import NavBar from "../components/NavBar"

import '../components/styles/profile.css'
import '../components/styles/userRegistation.css'

import { FaUserEdit, FaUserFriends } from 'react-icons/fa';
import { RiRestaurantLine } from 'react-icons/ri';
import UserRegistration from "./UserRegistration";
import { useState } from "react";
import EditProfile from "../components/EditProfile";
import UserRating from "../components/userRating";
import RestaurantForm from "../components/RestaurantForm";

const Profile = () => {

    const [editProfile, setEditProfile] = useState(false)
    const [myRatings, setMyRatings] = useState(false)
    const [registerUser, setRegisterUser] = useState(false)

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <>
            <NavBar />
            <div className="side-bar">
                <ul>
                    <li onClick={() => { setEditProfile(true); setMyRatings(false) }}>
                        <span>
                            <FaUserEdit />
                        </span> Editar perfil
                    </li>
                    {
                        currentUser.perfil === 'user'
                            ?
                            <li onClick={() => { setEditProfile(false); setMyRatings(true) }}>
                                <span><BsStarFill />  </span>  Minhas avaliações
                            </li>
                            :
                            (<>
                                <li onClick={() => { setRegisterUser(true); setMyRatings(false); setEditProfile(false) }}>
                                    <span><RiRestaurantLine />  </span>  Cadastrar Restaurante
                                </li>

                                <li onClick={() => { setEditProfile(false); setMyRatings(true) }}>
                                    <span><FaUserFriends />  </span>  Gerir Usuarios
                                </li>
                            </>

                            )}
                </ul>
            </div>

            {editProfile && <EditProfile />}
            {myRatings && <UserRating />}
            {registerUser && <RestaurantForm />}
        </>
    )
}

export default Profile