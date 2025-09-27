import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';
import '../Profile.css'
import besthm from '../besthm.jpg';

const Profile = () => {
    const [user,setUser] = useContext(userContext);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    const handleLogout = () => {
        setUser('');
        navigate('/');
    };

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/order/${user.ID}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Nie udało się pobrać zamówień');
                    }
                    return response.json();
                })
                .then((data) => {
                    setOrders(data);
                })
                .catch((error) => {
                    console.error('Błąd podczas pobierania zamówień:', error);
                    setError('Nie udało się załadować zamówień.');
                });
        }
    }, [user]);

    if (!user) {
        return (
            <div>
                <p>Nie jestes zalogowany, zaloguj sie.</p>
                <button onClick={() => navigate('/')} style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
                   Przejdz do logowania
                </button>
            </div>
        );
    }

    const handleOrderClick = (orderId) => {
        navigate(`/orderDetails/${orderId}`);
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
                    <img src={besthm} alt="Logo" />
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
            <div className="profile-container">
                <h2>Profile</h2>
                <p>Username: {user.username}</p>
                <p>Name: {user.name}</p>
                <p>Surname: {user.surname}</p>
                <p>Email: {user.email}</p>
                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: '20px',
                        padding: '10px',
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Logout
                </button>

                <h3>Orders</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleOrderClick(order.id)}
                            >
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.totalPrice} zł</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Profile;
