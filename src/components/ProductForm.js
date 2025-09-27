import React, { useState } from 'react';
import besthm from '../besthm.jpg';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeBrand = (e) => setBrand(e.target.value);
    const onChangePrice = (e) => setPrice(e.target.value);
    const onChangeDescription = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            brand,
            price,
            description,
        };

        fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Nie udało się dodać produktu');
                }
            })
            .then((data) => {
                setMessage('Produkt został pomyślnie dodany!');
                setIsError(false);
            })
            .catch((error) => {
                setMessage(error.message);
                setIsError(true);
            });
    };

    return (
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

            <div className="registration-box">
                <h2>Dodaj Produkt</h2>
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label htmlFor="name">Nazwa:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChangeName}
                            required
                            placeholder={"nazwa"}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marka:</label>
                        <input
                            type="text"
                            id="brand"
                            value={brand}
                            onChange={onChangeBrand}
                            required
                            placeholder={"marka"}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Cena:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={onChangePrice}
                            required
                            placeholder={"cena"}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Opis:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={onChangeDescription}
                            required
                            placeholder={"opis"}
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Dodaj Produkt</button>
                </form>
                {message && (
                    <div
                        style={{
                            color: isError ? 'red' : 'green',
                            marginTop: '20px',
                            textAlign: 'center',
                        }}
                    >
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductForm;