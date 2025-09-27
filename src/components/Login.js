import besthm from '../besthm.jpg';
import '../Login.css';
import { userContext } from "../App";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useContext(userContext);
    const [formData, setFormData] = useState({
        ID: '',
        username: '',
        password: '',
        name: '',
        surname: '',
        email: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.user) {
                setUser({
                    ID: result.user.id,
                    username: result.user.username,
                    password: result.user.password,
                    name: result.user.name,
                    surname: result.user.surname,
                    email: result.user.email
                });

                setIsLoggedIn(true);
                setMessage('Login successful!');
                navigate('/profile');
            } else {
                setError('Invalid credentials, please try again.');
            }
        } catch (error) {
            console.error(error);
            setError('Something went wrong. Please try again.');
        }
    };


    return (
        <div>
            <div className="header-section">
                <div className="promo-container">
                    <p className="promo">Zapłać za 30 dni!</p>
                    <p className="promo">Darmowa dostawa od 200 zł!</p>
                    <p className="promo">Szybka wysyłka każdym kurierem!</p>
                    <p className="promo">Duży wybór marek!</p>
                    <p className="promo">Dużo sezonowych wysprzedaży!</p>
                </div>

                <h1>Best HM.pl</h1>
                <div className="header-image">
                    <img src={besthm} alt="Logo"/>
                </div>

                <form className="search-form" action="#" method="get">
                    <input
                        type="text"
                        placeholder="Szukaj..."
                        name="search"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Szukaj</button>
                </form>

                <div className="promo-categories">
                    <a href="#mens" className="categories">Męskie</a>
                    <a href="#womens" className="categories">Damskie</a>
                    <a href="#kids" className="categories">Dziecięce</a>
                    <a href="#midseason" className="categories">Mid Season Sale</a>
                    <a href="#shoes" className="categories">Buty</a>
                    <a href="#bestsellers" className="categories">Bestsellery</a>
                </div>
            </div>
            <div className="login-box">
                <h2>Login</h2>
                {isLoggedIn ? (
                    <p>{message}</p>
                ) : (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="user-box">
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Username:</label>
                            </div>
                            <div className="user-box">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Password:</label>
                            </div>
                            <button type="submit">Login</button>
                        </form>

                        {message && <p style={{color: 'green'}}>{message}</p>}
                        {error && <p style={{color: 'red'}}>{error}</p>}
                    </>
                )}
            </div>
        </div>
    );
}
export default Login;

