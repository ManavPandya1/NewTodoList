import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', credentials);

            if (response.status === 200) {
                const { token } = response.data;
                sessionStorage.setItem('token', token);
                console.log('Login successful!');
            } else {
                console.error('Login failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'inline-block' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Username:
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} style={{ marginLeft: '10px' }} />
                </label>
                <br />
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} style={{ marginLeft: '10px' }} />
                </label>
                <br />
                <button type="submit" style={{ marginLeft: '10px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;