import React, { useState, useEffect } from 'react';
import ArticleList from './ProductList';
// import ArticleForm from './ProductForm';
import '../App.css';
import besthm from '../besthm.jpg';
import ProductDetails from "./ProductDetails";
import {Link} from "react-router-dom";



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
            .then((response) => response.json())
            .then((data) => setProducts(data.slice(0, 10)));
    }, []);



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
                    <input type="text" placeholder="Szukaj..." name="search" className="search-input"/>
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
            <ArticleList articles={products}/>
            <h2 className="centered">Nasi najlepsi klienci</h2>
            <table className="client-table" border="1">
                <tr>
                    <th>Imię</th>
                    <th>Ilość zakupionych przedmiotów</th>
                    <th>Ilość wydanych pieniędzy (PLN)</th>
                </tr>
                <tr>
                    <td>Jan</td>
                    <td>31</td>
                    <td>1923</td>
                </tr>
                <tr>
                    <td>Paweł</td>
                    <td>28</td>
                    <td>1788</td>
                </tr>
                <tr>
                    <td>Michał</td>
                    <td>23</td>
                    <td>1299</td>
                </tr>
            </table>

            <h3>Czemu warto nas wybrać?</h3>
            <ul>
                <li>Dobry kontakt z supportem</li>
                <li>Wysoka jakość produktów</li>
                <li>Szybki czas wysyłki!</li>
            </ul>
            <h5>
                <img src="https://d2yvmenv39glx3.cloudfront.net/images/f-85184-1005-elementy-wystroju-sklepow-z-ubraniami.jpg" alt="Sklepson" />
            </h5>
        </div>
    );
};

export default Home;
