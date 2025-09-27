import { useContext, useState, useEffect } from "react";
import { userContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import besthm from '../besthm.jpg';

const ProductDetails = () => {
    const [user] = useContext(userContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/product/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Produkt nie znaleziony");
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((error) => console.error("Błąd:", error));
    }, [id]);

    const addToCart = async () => {
        if (!user || !user.ID) {
            setMessage("Musisz byc zalogowany, aby przejsc do koszyka.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/addToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.ID,
                    productId: product.id,
                    quantity: 1,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
            } else {
                setMessage(result.message || 'Nie udalo sie dodac do koszyka');
            }
        } catch (error) {
            setMessage('Nie udalo sie dodac do koszyka2');
        }
    };

    if (!product) {
        return <p>Ładowanie szczegółów produktu...</p>;
    }

    return (
        <div className="ProductDetailsPage">
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
            <div className="ProductDetails">
                <h1>Szczegóły produktu</h1>
                <p>Nazwa produktu: {product.name}</p>
                <p>Opis: {product.description}</p>
                <p>Cena: {product.price} zł</p>
                <button onClick={addToCart}>Dodaj do koszyka</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default ProductDetails;


