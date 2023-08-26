import React, { useContext } from 'react';
import { Form, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsBag, BsPerson } from 'react-icons/bs';
import { createContext } from 'react';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const functions = createContext();

function Header(props) {
    const [dropDown, setDropdown] = useState(false);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [product, setProduct] = useState('loading');
    return (
        <>
            <functions.Provider
                value={{
                    cart,
                    setCart,
                    wishlist,
                    setWishlist,
                    product,
                    setProduct,
                }}>
                <header>
                    <Navbar
                        sticky='top'
                        expand='lg'
                        style={{ background: '#fff' }}
                        className='ps-4 p-3 navbar'>
                        <NavLink
                            to='/'
                            className='text-black'
                            style={{
                                letterSpacing: '3px',
                                fontSize: '25px',
                            }}>
                            FLIPKART
                        </NavLink>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <NavLink to='/men' className='nav-link link'>
                                    MEN
                                </NavLink>
                                <NavLink to='/mobile' className='nav-link link'>
                                    MOBILES
                                </NavLink>
                                <NavLink to='/laptop' className='nav-link link'>
                                    LAPTOP
                                </NavLink>
                                <NavLink to='/watch' className='nav-link link'>
                                    WATCHS
                                </NavLink>
                            </Nav>
                            <Form className=''>
                                <Form.Control
                                    type='search'
                                    placeholder='Search for product'
                                    className='me-2 mx-3 w-100 px-5'
                                    aria-label='Search'
                                    style={{ background: '#EBEBEB' }}
                                />
                            </Form>
                            <div className='social-icon ps-lg-4 ps-0 d-inline-flex align-items-center justify-content-between'>
                                <div className='ps-5 pt-lg-0 pt-3'>
                                    <NavLink>
                                        <BsPerson
                                            className='headericon'
                                            onClick={() =>
                                                setDropdown(prev => !prev)
                                            }
                                        />
                                    </NavLink>

                                    <NavLink to='/wishlist'>
                                        <AiOutlineHeart className='headericon' />
                                        <span
                                            className='position-absolute translate-middle badge rounded-pill bg-danger'
                                            style={{
                                                fontSize: '13px',
                                            }}>
                                            {wishlist.length}
                                        </span>
                                    </NavLink>
                                    <NavLink to='/cart'>
                                        <BsBag
                                            size={20}
                                            className='headericon'
                                        />
                                        <span
                                            className='position-absolute translate-middle badge rounded-pill bg-danger'
                                            style={{
                                                fontSize: '13px',
                                            }}>
                                            {cart.length}
                                        </span>
                                    </NavLink>
                                </div>
                            </div>{' '}
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                {dropDown && (
                    <div className='flex flex-column dropdownmenu'>
                        <ul className='flex flex-column flex-column-start ps-3'>
                            <NavLink to='account/profile' className='li pb-2'>
                                Profile
                            </NavLink>
                            <hr className='p-0 m-0' />
                            <NavLink
                                to='account/order'
                                className='li py-1 pt-2'>
                                Orders
                            </NavLink>
                            <NavLink to='wishlist' className='li pb-1'>
                                Wishlist
                            </NavLink>
                            <NavLink to='' className='li pb-1'>
                                Gift Cards
                            </NavLink>
                            <NavLink to='' className='li pb-2'>
                                Contact Us
                            </NavLink>
                            <hr className='p-0 m-0' />
                            <NavLink
                                to='account/coupons'
                                className='li pb-1 pt-2'>
                                Coupons
                            </NavLink>
                            <NavLink to='account/savedcard' className='li pb-1'>
                                Saved Cards
                            </NavLink>
                            <NavLink to='account/address' className='li pb-2'>
                                Saved Addresses
                            </NavLink>
                            <hr className='p-0 m-0' />

                            <NavLink to='' className='li pb-1'>
                                Logout
                            </NavLink>
                        </ul>
                    </div>
                )}

                <div>{props.children}</div>
            </functions.Provider>
        </>
    );
}
export default Header;
export { functions };
