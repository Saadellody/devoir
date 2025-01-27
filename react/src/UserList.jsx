import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/utilisateurs')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des utilisateurs:', error);
                setLoading(false);
            });
    }, []);

    // Filter the users by name
    const filteredUsers = users.filter(user => user.nom.toLowerCase().includes(filter.toLowerCase()));

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {/* Filter Input */}
            <input
                type="text"
                placeholder="Filtrer par nom"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="filter-input"
            />
            {/* Display filtered users */}
            {filteredUsers.map(user => (
                <div key={user.id} className="card">
                    <h2>{user.nom} {user.prenom}</h2>
                    <p><strong>Email :</strong> {user.email}</p>
                    <p><strong>Téléphone :</strong> {user.telephone}</p>
                    <p><strong>Sexe :</strong> {user.sexe}</p>
                    <p><strong>Nationalité :</strong> {user.nationalite}</p>
                    <p><strong>Rôle :</strong> {user.role}</p>
                    <p><strong>Ville :</strong> {user.ville}</p>
                    <p><strong>Adresse :</strong> {user.adresse}</p>
                    <img src={user.photo} alt={`${user.nom} ${user.prenom}`} />
                </div>
            ))}
        </div>
    );
};

export default UserList;
