import React, { useContext } from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import { functions } from '../components/Header';
import Image from '../components/Image';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import productdetail from '../services/productdetail';

export default function Wishlist() {
    const { wishlist, setWishlist, cart, setCart, product } =
        useContext(functions);

    const wishtocart = id => {
        const ExistingProduct = cart.find(cur => cur.id === id);
        if (ExistingProduct) {
            const updateCart = cart.map(pro => {
                if (pro.id === id) pro.Quantity += 1;
                return pro;
            });
            setCart(updateCart);
        } else {
            const newProduct = productdetail.find(product => product.id === id);
            setCart(prev => [...prev, newProduct]);
        }
        const updatedWishlist = wishlist.filter(product => product.id !== id);

        setWishlist(updatedWishlist);
    };

    const remove = id => {
        const updatedWishlist = wishlist.filter(product => product.id !== id);

        setWishlist(updatedWishlist);
    };

    return (
        <section>
            <Container>
                {wishlist.length ? (
                    <div className='mt-4'>
                        <div className='py-4'>
                            <h5>My Wishlist {wishlist.length} items</h5>
                        </div>
                        <Row>
                            {wishlist?.map(product => {
                                return (
                                    <Col
                                        lg={3}
                                        md={6}
                                        sm={12}
                                        className='product'>
                                        <Card
                                            // onClick={() => handleChnage(id)}

                                            className='product1 card text-dark'
                                            style={{
                                                cursor: 'pointer',
                                                height: '90%',
                                            }}>
                                            <div
                                                style={{
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                }}>
                                                <Link
                                                    to={`/view/${product.id}`}>
                                                    <Image
                                                        name={product.image}
                                                    />
                                                </Link>
                                            </div>
                                            <Card.Body className='text-center'>
                                                <Card.Title>
                                                    {product.name}
                                                </Card.Title>
                                                <p
                                                    style={{
                                                        fontWeight: 'bold',
                                                    }}>
                                                    <s className='pe-3'>
                                                        $100.00
                                                    </s>{' '}
                                                    {product.price}
                                                </p>
                                                <RxCross2
                                                    className='bin'
                                                    onClick={() =>
                                                        remove(product.id)
                                                    }
                                                />
                                            </Card.Body>
                                            <Card.Footer className='text-center bg-white pt-3 pb-3'>
                                                <NavLink
                                                    className='wishlistbutton'
                                                    style={{
                                                        color: '#FF3E6C',
                                                        fontWeight: 'bolder',
                                                        letterSpacing: '1px',
                                                    }}
                                                    onClick={() =>
                                                        wishtocart(product.id)
                                                    }>
                                                    MOVE TO BAG
                                                </NavLink>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                ) : (
                    <div className='empty'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h4
                                style={{
                                    fontWeight: '900',
                                }}>
                                YOUR WISHLIST IS EMPTY
                            </h4>
                            <p
                                className='m-auto my-4'
                                style={{
                                    maxWidth: '400px',
                                    fontSize: '20px',
                                    color: '#949EA5',
                                }}>
                                Add items that you like to your wishlist. Review
                                them anytime and easily move them to the bag.
                            </p>
                            <Image name='shopping/wishlist.svg' />
                            <NavLink
                                className='mt-5 emptyWishlistbtn btn'
                                to='/'>
                                CONTINUE SHOPPING
                            </NavLink>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
