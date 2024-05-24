import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Login.css';
import '../components/SecondaryNavbar';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.accessToken);
                alert('Login successful');
                navigate('/');
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Failed to login');
            }
        } catch (error) {
            alert(error.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className='cart-box-log'>
                <div className="login-box">
                    <h1>Accedi</h1>
                    <div className="input-icon">
                        <i className="fa fa-envelope"></i>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-icon">
                        <i className="fa fa-lock"></i>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='log-button' onClick={handleLogin}>ACCEDI</button>
                    <hr className='hr-log' />
                    <div className="divider">Hai dimenticato la password?</div>
                    <button className="login-google">
                        <span className='google-i-bg-2'>
                            <i className="fab fa-google"></i>
                        </span><span> ACCEDI CON <strong> GOOGLE</strong></span>
                    </button>
                    <button className="login-facebook">
                        <span className='fb-i-bg'>
                            <i className="fab fa-facebook-f"></i></span><span> ACCEDI CON  <strong> FACEBOOK</strong></span>
                    </button>
                    <p className="signup"><em>Non hai un account?</em> <strong><Link to='/register' className="account-link">CREA UN ACCOUNT</Link></strong></p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
