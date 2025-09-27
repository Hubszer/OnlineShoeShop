import React, {useEffect, useState, useContext, createContext} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import OrderDetails from "./components/OrderDetails";
import ProductForm from "./components/ProductForm";
import Edit from "./components/Edit";
export const userContext = createContext(null);


const App = () => {
    const [user,setUser] = useState({username:'',password:'',name:'',surname:'',email:''});


    return (
        <userContext.Provider value={[user,setUser]}>
            <Router>
                <div>
                    <nav>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        {!user.username && <NavLink to="/login" style={{marginLeft: '10px'}}>Login</NavLink>}
                        {!user.username && <NavLink to="/register" style={{marginLeft: '10px'}}>Register</NavLink>}
                        {user.username && <NavLink to="/profile" style={{marginLeft: '10px'}}>Profile</NavLink>}
                        {user.username && <NavLink to="/cart" style={{marginLeft: '10px'}}>Cart</NavLink>}
                        {user.username && <NavLink to="/add" style={{marginLeft: '10px'}}>Dodaj produkt</NavLink>}
                        {/*{user.username && <NavLink to="/edit" style={{marginLeft: '10px'}}>Edytuj produkt</NavLink>}*/}
                    </nav>

                    <Routes>
                        <Route path="/profile" element={user ? <Profile/> : <Navigate to="/"/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product/:id" element={<ProductDetails/>}/>
                        <Route path="/orderDetails/:orderId" element={<OrderDetails/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        {/*<Route path="/add" element={<AddProduct/>}/>*/}
                        <Route path="/add" element={<ProductForm/>}/>
                        <Route path="/editUser" element={<Edit/>}/>

                    </Routes>
                </div>
            </Router>
        </userContext.Provider>

    );
};

export default App;
