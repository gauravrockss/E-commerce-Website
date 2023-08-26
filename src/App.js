import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Wishlist from './pages/Wishlist';
import Men from './pages/Men';
import Mobiles from './pages/Mobiles';
import Index from './pages/Account';
import Profile from './pages/Account/Profile';
import Address from './pages/Account/Address';
import Cart from './pages/Cart';
import ProductView from './pages/ProductView';

import Shopping from './pages/Shopping';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './pages/Account/Order';
import Overview from './pages/Account/Overview';
import Coupons from './pages/Account/Coupons';
import Savecard from './pages/Account/Savecard';
import Savedvpa from './pages/Account/Savedvpa';
import Privacypolicy from './pages/Privacypolicy';
import Laptop from './pages/Laptop';
import Watch from './pages/Watch';

function App() {
    return (
        <>
            <Header>
                <Routes>
                    <Route path='/' element={<Shopping />} />

                    <Route path='/view/:id' element={<ProductView />} />

                    <Route path='/men' element={<Men />} />
                    <Route path='/laptop' element={<Laptop />} />
                    <Route path='/mobile' element={<Mobiles />} />
                    <Route path='/watch' element={<Watch />} />

                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/account' element={<Index />}>
                        <Route index element={<Profile />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='address' element={<Address />} />
                        <Route path='order' element={<Order />} />
                        <Route path='overview' element={<Overview />} />
                        <Route path='coupons' element={<Coupons />} />
                        <Route path='savedcard' element={<Savecard />} />
                        <Route path='savedvpa' element={<Savedvpa />} />
                    </Route>
                    <Route path='privacy' element={<Privacypolicy />} />
                </Routes>
            </Header>
        </>
    );
}

export default App;
