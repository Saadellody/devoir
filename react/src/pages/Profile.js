// src/pages/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.user);

    console.log("Profil utilisateur:", user);  // Vérifiez si l'état utilisateur est accessible

    if (!user) {
        return <p>Vous devez être connecté pour voir votre profil.</p>;
    }

    return (
        <div>
            <h1>Profil de {user.nom} {user.prenom}</h1>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.telephone}</p>
            <p>Ville: {user.ville}</p>
            {/* D'autres informations du profil ici */}
        </div>
    );
};

export default Profile;
