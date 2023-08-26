import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import Address from './Address';
import Profile from './Profile';

export default function index() {
    return (
        <>
            <Container>
                <Row className=''>
                    <div className='mt-5 '>
                        <h5>Account</h5>
                    </div>
                    <hr />
                    <Col xs={3} className=''>
                        <div className='sidebar-menu'>
                            <div className='py-3'>
                                <NavLink className='sidebar' to='overview'>
                                    Overview
                                </NavLink>
                                <hr />
                            </div>
                            <div>
                                <p className='pt-3'>ORDERS</p>
                                <NavLink className='sidebar' to='order'>
                                    Orders & Returns
                                </NavLink>
                                <hr />
                            </div>
                            <div>
                                <p className='pt-3'>CREDITS</p>
                                <NavLink className='sidebar' to='coupons'>
                                    Coupons
                                </NavLink>
                                <hr />
                            </div>
                            <div className='d-flex flex-column'>
                                <p className='pt-3'>ACCOUNT</p>
                                <NavLink
                                    className='sidebar sidebar-activeLink'
                                    to='profile'>
                                    Profile
                                </NavLink>
                                <NavLink className='sidebar' to='savedcard'>
                                    Saved Cards
                                </NavLink>
                                <NavLink className='sidebar' to='savedvpa'>
                                    Saved VPA
                                </NavLink>
                                <NavLink className='sidebar' to='address'>
                                    Addresses
                                </NavLink>
                                <hr />
                            </div>
                            <div>
                                <p className='pt-3'>LEGAL</p>
                                <NavLink className='sidebar' to='/privacy'>
                                    Privacy Policy
                                </NavLink>
                                <hr />
                            </div>
                        </div>
                    </Col>
                    <Col xs={9} className=''>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
