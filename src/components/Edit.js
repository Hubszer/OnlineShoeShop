// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import besthm from '../besthm.jpg';
// // //
// // // const Edit = () => {
// // //     const { productId } = useParams();  // Get productId from URL params
// // //     const [name, setName] = useState('');
// // //     const [brand, setBrand] = useState('');
// // //     const [price, setPrice] = useState('');
// // //     const [description, setDescription] = useState('');
// // //     const [message, setMessage] = useState('');
// // //     const [isError, setIsError] = useState(false);
// // //     const navigate = useNavigate();  // For navigation
// // //
// // //     // Fetch the product details when the component mounts
// // //     useEffect(() => {
// // //         fetch(`http://localhost:3000/edit/${productId}`)
// // //             .then((response) => {
// // //                 if (!response.ok) {
// // //                     throw new Error('Produkt nie znaleziony');
// // //                 }
// // //                 return response.json();
// // //             })
// // //             .then((data) => {
// // //                 setName(data.name);
// // //                 setBrand(data.brand);
// // //                 setPrice(data.price);
// // //                 setDescription(data.description);
// // //             })
// // //             .catch((error) => {
// // //                 setMessage('Błąd ładowania produktu');
// // //                 setIsError(true);
// // //             });
// // //     }, [productId]);
// // //
// // //     const onChangeName = (e) => setName(e.target.value);
// // //     const onChangeBrand = (e) => setBrand(e.target.value);
// // //     const onChangePrice = (e) => setPrice(e.target.value);
// // //     const onChangeDescription = (e) => setDescription(e.target.value);
// // //
// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //
// // //         const updatedProduct = {
// // //             name,
// // //             brand,
// // //             price,
// // //             description,
// // //         };
// // //
// // //         fetch(`http://localhost:3000/products/${productId}`, {
// // //             method: 'PUT',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify(updatedProduct),
// // //         })
// // //             .then((response) => {
// // //                 if (response.ok) {
// // //                     return response.json();
// // //                 } else {
// // //                     throw new Error('Nie udało się zaktualizować produktu');
// // //                 }
// // //             })
// // //             .then((data) => {
// // //                 setMessage('Produkt został pomyślnie zaktualizowany!');
// // //                 setIsError(false);
// // //                 // Optionally navigate back to product details or list
// // //                 // navigate(`/product/${productId}`);
// // //             })
// // //             .catch((error) => {
// // //                 setMessage(error.message);
// // //                 setIsError(true);
// // //             });
// // //     };
// // //
// // //     return (
// // //         <div className="header-section">
// // //             <div className="promo-container">
// // //                 <p className="promo">Zapłać za 30 dni!</p>
// // //                 <p className="promo">Darmowa dostawa od 200 zł!</p>
// // //                 <p className="promo">Szybka wysyłka każdym kurierem!</p>
// // //                 <p className="promo">Duży wybór marek!</p>
// // //                 <p className="promo">Dużo sezonowych wysprzedaży!</p>
// // //             </div>
// // //
// // //             <h1>Best HM.pl</h1>
// // //             <div className="header-image">
// // //                 <img src={besthm} alt="Logo"/>
// // //             </div>
// // //
// // //             <form className="search-form" action="#" method="get">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Szukaj..."
// // //                     name="search"
// // //                     className="search-input"
// // //                 />
// // //                 <button type="submit" className="search-button">Szukaj</button>
// // //             </form>
// // //
// // //             <div className="promo-categories">
// // //                 <a href="#mens" className="categories">Męskie</a>
// // //                 <a href="#womens" className="categories">Damskie</a>
// // //                 <a href="#kids" className="categories">Dziecięce</a>
// // //                 <a href="#midseason" className="categories">Mid Season Sale</a>
// // //                 <a href="#shoes" className="categories">Buty</a>
// // //                 <a href="#bestsellers" className="categories">Bestsellery</a>
// // //             </div>
// // //
// // //             <div className="registration-box">
// // //                 <h2>Edytuj Produkt</h2>
// // //                 <form onSubmit={handleSubmit} className="registration-form">
// // //                     <div className="form-group">
// // //                         <label htmlFor="name">Nazwa:</label>
// // //                         <input
// // //                             type="text"
// // //                             id="name"
// // //                             value={name}
// // //                             onChange={onChangeName}
// // //                             required
// // //                             placeholder="Nazwa produktu"
// // //                         />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="brand">Marka:</label>
// // //                         <input
// // //                             type="text"
// // //                             id="brand"
// // //                             value={brand}
// // //                             onChange={onChangeBrand}
// // //                             required
// // //                             placeholder="Marka produktu"
// // //                         />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="price">Cena:</label>
// // //                         <input
// // //                             type="number"
// // //                             id="price"
// // //                             value={price}
// // //                             onChange={onChangePrice}
// // //                             required
// // //                             placeholder="Cena produktu"
// // //                         />
// // //                     </div>
// // //                     <div className="form-group">
// // //                         <label htmlFor="description">Opis:</label>
// // //                         <textarea
// // //                             id="description"
// // //                             value={description}
// // //                             onChange={onChangeDescription}
// // //                             required
// // //                             placeholder="Opis produktu"
// // //                         ></textarea>
// // //                     </div>
// // //                     <button type="submit" className="submit-button">Zaktualizuj Produkt</button>
// // //                 </form>
// // //                 {message && (
// // //                     <div
// // //                         style={{
// // //                             color: isError ? 'red' : 'green',
// // //                             marginTop: '20px',
// // //                             textAlign: 'center',
// // //                         }}
// // //                     >
// // //                         {message}
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };
// // //
// // // export default Edit;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import besthm from '../besthm.jpg';
// //
// // const Edit = () => {
// //     const { userId } = useParams();  // Get userId from URL params
// //     const [name, setName] = useState('');
// //     const [surname, setSurname] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [message, setMessage] = useState('');
// //     const [isError, setIsError] = useState(false);
// //     const navigate = useNavigate();  // For navigation
// //
// //     // Fetch the user details when the component mounts
// //     useEffect(() => {
// //         fetch(`http://localhost:3000/editUser/${userId}`)
// //             .then((response) => {
// //                 if (!response.ok) {
// //                     throw new Error('Użytkownik nie znaleziony');
// //                 }
// //                 return response.json();
// //             })
// //             .then((data) => {
// //                 setName(data.name);
// //                 setSurname(data.surname);
// //                 setEmail(data.email);
// //             })
// //             .catch((error) => {
// //                 setMessage('Błąd ładowania użytkownika');
// //                 setIsError(true);
// //             });
// //     }, [userId]);
// //
// //     const onChangeName = (e) => setName(e.target.value);
// //     const onChangeSurname = (e) => setSurname(e.target.value);
// //     const onChangeEmail = (e) => setEmail(e.target.value);
// //
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //
// //         const updatedUser = {
// //             name,
// //             surname,
// //             email,
// //         };
// //
// //         fetch(`http://localhost:3000/users/${userId}`, {
// //             method: 'PUT',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(updatedUser),
// //         })
// //             .then((response) => {
// //                 if (response.ok) {
// //                     return response.json();
// //                 } else {
// //                     throw new Error('Nie udało się zaktualizować użytkownika');
// //                 }
// //             })
// //             .then((data) => {
// //                 setMessage('Użytkownik został pomyślnie zaktualizowany!');
// //                 setIsError(false);
// //                 // Optionally navigate back to user details or list
// //                 // navigate(`/user/${userId}`);
// //             })
// //             .catch((error) => {
// //                 setMessage(error.message);
// //                 setIsError(true);
// //             });
// //     };
// //
// //     return (
// //         <div className="header-section">
// //             <div className="promo-container">
// //                 <p className="promo">Zapłać za 30 dni!</p>
// //                 <p className="promo">Darmowa dostawa od 200 zł!</p>
// //                 <p className="promo">Szybka wysyłka każdym kurierem!</p>
// //                 <p className="promo">Duży wybór marek!</p>
// //                 <p className="promo">Dużo sezonowych wysprzedaży!</p>
// //             </div>
// //
// //             <h1>Best HM.pl</h1>
// //             <div className="header-image">
// //                 <img src={besthm} alt="Logo"/>
// //             </div>
// //
// //             <form className="search-form" action="#" method="get">
// //                 <input
// //                     type="text"
// //                     placeholder="Szukaj..."
// //                     name="search"
// //                     className="search-input"
// //                 />
// //                 <button type="submit" className="search-button">Szukaj</button>
// //             </form>
// //
// //             <div className="promo-categories">
// //                 <a href="#mens" className="categories">Męskie</a>
// //                 <a href="#womens" className="categories">Damskie</a>
// //                 <a href="#kids" className="categories">Dziecięce</a>
// //                 <a href="#midseason" className="categories">Mid Season Sale</a>
// //                 <a href="#shoes" className="categories">Buty</a>
// //                 <a href="#bestsellers" className="categories">Bestsellery</a>
// //             </div>
// //
// //             <div className="registration-box">
// //                 <h2>Edytuj Użytkownika</h2>
// //                 <form onSubmit={handleSubmit} className="registration-form">
// //                     <div className="form-group">
// //                         <label htmlFor="name">Imię:</label>
// //                         <input
// //                             type="text"
// //                             id="name"
// //                             value={name}
// //                             onChange={onChangeName}
// //                             required
// //                             placeholder="Imię użytkownika"
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="surname">Nazwisko:</label>
// //                         <input
// //                             type="text"
// //                             id="surname"
// //                             value={surname}
// //                             onChange={onChangeSurname}
// //                             required
// //                             placeholder="Nazwisko użytkownika"
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email:</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             value={email}
// //                             onChange={onChangeEmail}
// //                             required
// //                             placeholder="Email użytkownika"
// //                         />
// //                     </div>
// //                     <button type="submit" className="submit-button">Zaktualizuj Użytkownika</button>
// //                 </form>
// //                 {message && (
// //                     <div
// //                         style={{
// //                             color: isError ? 'red' : 'green',
// //                             marginTop: '20px',
// //                             textAlign: 'center',
// //                         }}
// //                     >
// //                         {message}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default Edit;
//
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
//
// const Edit = () => {
//     const { userId } = useParams(); // Pobieranie userId z URL
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [message, setMessage] = useState('');
//     const [isError, setIsError] = useState(false);
//     const navigate = useNavigate();
//
//     // Fetching user data when the component mounts
//     useEffect(() => {
//         // Get user profile data from the server
//         fetch(`http://localhost:3000/users/${userId}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setUsername(data.username);
//                 setPassword(data.password);
//                 setEmail(data.email);
//                 setName(data.name);
//                 setSurname(data.surname);
//             })
//             .catch((error) => {
//                 setMessage('Błąd ładowania danych użytkownika');
//                 setIsError(true);
//             });
//     }, [userId]);
//
//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         const updatedUser = {
//             username,
//             password,
//             email,
//             name,
//             surname,
//         };
//
//         fetch(`http://localhost:3000/editUser/${userId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Assuming you have an Authorization token, e.g. JWT token
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Nie udało się zaktualizować profilu');
//                 }
//             })
//             .then((data) => {
//                 setMessage('Profil został pomyślnie zaktualizowany!');
//                 setIsError(false);
//                 // Optional redirect after successful update
//                 navigate(`/profile/${userId}`);
//             })
//             .catch((error) => {
//                 setMessage(error.message);
//                 setIsError(true);
//             });
//     };
//
//     return (
//         <div className="edit-profile">
//             <h1>Edytuj Profil</h1>
//
//             <form onSubmit={handleSubmit} className="edit-profile-form">
//                 <div className="form-group">
//                     <label htmlFor="username">Nazwa użytkownika:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="password">Hasło:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="name">Imię:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="surname">Nazwisko:</label>
//                     <input
//                         type="text"
//                         id="surname"
//                         value={surname}
//                         onChange={(e) => setSurname(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <button type="submit" className="submit-button">
//                     Zaktualizuj Profil
//                 </button>
//             </form>
//
//             {message && (
//                 <div
//                     style={{
//                         color: isError ? 'red' : 'green',
//                         marginTop: '20px',
//                         textAlign: 'center',
//                     }}
//                 >
//                     {message}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Edit;
