import React, { useState } from 'react';
import '../style/Register.css';



function RegisterComponent() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        name: '',
        surname: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
                mode: 'cors'
            });
            if (response.ok) {
                const data = await response.json();
                alert('Registration successful');
            } else {
                throw new Error('Failed to register');
            }
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div className="reg-container">
            <div className="register-container">
                <div className='card-box-register'>
                    <div className="register-box">
                        <h1>Crea un account</h1>
                        <div className="input-icon">
                            <i className="fa fa-user"></i>
                            <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} />
                        </div>
                        <div className="input-icon">
                            <i className="fa fa-user"></i>
                            <input type="text" name="name" placeholder="Nome" value={userData.name} onChange={handleChange} />
                        </div>
                        <div className="input-icon">
                            <i className="fa fa-user"></i>
                            <input type="text" name="surname" placeholder="Cognome" value={userData.surname} onChange={handleChange} />
                        </div>
                        <div className="input-icon">
                            <i className="fa fa-envelope"></i>
                            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
                        </div>
                        <div className="input-icon">
                            <i className="fa fa-lock"></i>
                            <input type="password" name="password" placeholder="Password (sono necessari almeno 8 caratteri)" value={userData.password} onChange={handleChange} />
                        </div>
                        <button className='register-button-blu' onClick={handleRegister}>REGISTRATI</button>
                        <hr className="divider" />
                        <a href="https://www.google.com" className="login-google-two" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                            <span className='google-i-bg'>
                                <i className="fab fa-google"></i>
                            </span>
                            REGISTRATI CON <strong>GOOGLE</strong>
                        </a>
                        <p className="login-prompt"><em>Hai già un account?</em> <strong>ACCEDI</strong></p>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default RegisterComponent;
