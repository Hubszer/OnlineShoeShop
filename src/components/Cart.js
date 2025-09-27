//dziala

import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';
import "../Cart.css"
import besthm from '../besthm.jpg';

const Cart = () => {
    const [user] = useContext(userContext);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            fetch(`http://localhost:3000/cart/${user.ID}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Nie udało się pobrać koszyka');
                    }
                    return response.json();
                })
                .then((data) => {
                    setCartItems(data);
                    calculateTotalPrice(data);
                })
                .catch((error) => {
                    console.error('Błąd podczas pobierania koszyka:', error);
                    setError('Nie udało się załadować koszyka2.');
                });
        }
    }, [user, navigate]);

    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.productPrice * item.quantity;
        });
        setTotalPrice(total);
    };

    const handleOrder = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.ID,
                }),
            });

            if (!response.ok) {
                throw new Error('Nie udało się utworzyć zamówienia');
            }

            const data = await response.json();
            console.log('Zamówienie utworzone:', data);
            alert('Zamówienie zostało pomyślnie utworzone!');
            navigate('/profile');
        } catch (error) {
            console.error('Błąd podczas składania zamówienia:', error);
            setError('Nie udało się utworzyć zamówienia.');
        } finally {
            setLoading(false);
        }
    };

    const handleClearCart = async () => {

        try {
            const response = await fetch(`http://localhost:3000/removeCart`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Nie udało się usunąć koszyka');
            }

            const data = await response.json();
            console.log('Koszyk opróżniony:', data);
            alert('Koszyk został opróżniony!');
            setCartItems([]);
        } catch (error) {
            console.error('Błąd podczas opróżniania koszyka:', error);
            setError('Nie udało się opróżnić koszyka.');
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div>
                <p>You are not logged in. Please log in to view your cart.</p>
                <button
                    onClick={() => navigate('/login')}
                    style={{
                        padding: '10px',
                        background: 'blue',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Go to Login
                </button>
            </div>
        );
    }

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
            <div className="cart-section">
                <h2>Your Cart</h2>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Nazwa produktu</th>
                                <th>Cena</th>
                                <th>Ilość</th>
                                <th>Całość</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.productId}>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice} zł</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.productPrice * item.quantity} zł</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div>
                            <h3>Łączna kwota zamówienia: {totalPrice} zł</h3>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => navigate('/')}
                    className="cart-button"
                >
                    Kontynuuj zakupy
                </button>
                <button
                    onClick={handleOrder}
                    disabled={loading}
                    className="cart-button"
                >
                    Złóż zamówienie
                </button>
                <button
                    onClick={handleClearCart}
                    className="cart-button"
                >
                    Usuń koszyk
                </button>
            </div>
        </div>
    );
};

export default Cart;
