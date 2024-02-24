import React, { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.message);
            } else {
                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Username:
                    <input type="text" name="username" value={user.username} onChange={handleChange} style={{ marginLeft: '10px' }} />
                </label>
                <br />
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} style={{ marginLeft: '10px' }} />
                </label>
                <br />
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} style={{ marginLeft: '10px' }} />
                </label>
                <br />
                <button type="submit" style={{ marginLeft: '10px' }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;