import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "./Pagination";
import Item from "./Item";
import '../ProductList.css';



function PaginatedProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    useEffect(() => {
        fetch('http://localhost:3000/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Problem z odpowiedzią serwera');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    setProducts(data);
                    setLoading(false);
                } else {
                    setError('Nie znaleziono produktów');
                }
            })
            .catch((err) => {
                setError('Błąd podczas pobierania produktów');
                console.error('Błąd przy pobieraniu produktów:', err);
            });
    }, []);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentProduct = products.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="container">
            <h1>Lista produktów</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {currentProduct.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <Item product={currentProduct} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={products.length}
                paginate={paginate}
            />
        </div>
    );
}
export default PaginatedProductList;


