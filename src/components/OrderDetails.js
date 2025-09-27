import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import besthm from '../besthm.jpg';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState([]);
    const [message, setMessage] = useState('');


    useEffect(() => {
        fetch(`http://localhost:3000/orderDetails/${orderId}`)
            .then((response) => {
                if (!response.ok) throw new Error('Nie udało się pobrać szczegółów zamówienia');
                return response.json();
            })
            .then((data) => setOrder(data))
            .catch((error) => {
                console.error('Błąd:', error);
                setMessage('Nie udało się załadować szczegółów zamówienia2');
            });
    }, [orderId]);

    const orderSummary = order.length > 0 ? {
        OrderID: order[0].OrderID,
        OrderDate: new Date(order[0].OrderDate).toLocaleDateString(),
        TotalPrice: order[0].TotalPrice
    } : null;

    const products = order.map(item => ({
        name: item.ProductName,
        price: item.ProductPrice,
        quantity: item.ProductQuantity,
        total: item.ProductPrice * item.ProductQuantity
    }));

    if (!order || order.length === 0) {
        return <p>Ładowanie szczegółów zamówienia...</p>;
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

            <div className="OrderDetails">
                <h1>Szczegóły zamówienia</h1>
                {orderSummary && (
                    <div>
                        <p>Order ID: {orderSummary.OrderID}</p>
                        <p>Data zamówienia: {orderSummary.OrderDate}</p>
                        <p>Cena całkowita: {orderSummary.TotalPrice} zł</p>
                    </div>
                )}

                {products.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Cena</th>
                            <th>Ilość</th>
                            <th>Łączna cena</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price} zł</td>
                                <td>{product.quantity}</td>
                                <td>{product.total.toFixed(2)} zł</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Brak produktów w tym zamówieniu.</p>
                )}

                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default OrderDetails;
