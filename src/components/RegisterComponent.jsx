import React, { useState } from 'react';
import axios from 'axios';

function RegisterComponent() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        name: '',
        surname: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3001/auth/register', userData);
            alert('Registration successful');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" />
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
            <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="surname" value={userData.surname} onChange={handleChange} placeholder="Surname" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegisterComponent;
