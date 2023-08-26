import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { functions } from '../components/Header';
import Image from '../components/Image';

import productdetail from '../services/productdetail';

function ProductView() {
    const { setCart, cart, wishlist, setWishlist, product, setProduct } =
        useContext(functions);
    const [show, setShow] = useState(false);
    const [showW, setShowW] = useState(false);

    const [style, setStyle] = useState({
        color: 'white',
    });

    const id = Number(useParams().id);

    const getProduct = () => {
        try {
            const response = productdetail.find(product => product.id === id);
            const checkwish = wishlist.find(product => product.id === id);
            if (checkwish) {
                setStyle({ color: 'red' });
            }

            setProduct(response);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const AddWishlist = id => {
        setShowW(true);
        style.color === 'white'
            ? setStyle({ color: 'red' })
            : setStyle({ color: 'white' });
        const ExistingProduct = wishlist.find(cur => cur.id === id);

        if (ExistingProduct) {
            const removeWishlist = wishlist.filter(cur => cur.id !== id);
            setWishlist(removeWishlist);
        } else {
            const updatewish = productdetail.find(pro => pro.id === id);

            setWishlist(pre => [...pre, updatewish]);
        }
    };

    const checkCart = id => {
        setShow(true);
        const ExistingProduct = cart.find(cur => cur.id === id);
        if (ExistingProduct) {
            const updateCart = cart.map(pro => {
                if (pro.id === id) pro.Quantity += 1;
                return pro;
            });
            setCart(updateCart);
        } else {
            setCart(pre => [...pre, product]);
        }
    };

    return (
        <section
            className='singleProduct py-5'
            style={{ background: '#EBEBEB' }}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='text-lg-start text-center'>
                            <Image name={product.image} />
                        </div>
                    </Col>
                    <Col className='mt-2'>
                        <div>
                            <p className='pb-1 m-0'>Fashonable</p>
                            <h2 style={{ color: '#606060' }}>{product.name}</h2>
                        </div>
                        <div className='border my-3'></div>
                        <h3 style={{ color: '#606060' }}>COLOR</h3>
                        <div className='pt-1 d-flex '>
                            <div
                                className='red'
                                style={{
                                    background: 'red',
                                    border: '1px solid red',
                                }}></div>
                            <div
                                className='blue'
                                style={{
                                    background: 'blue',
                                    border: '1px solid blue',
                                }}></div>
                            <div
                                className='white'
                                style={{
                                    background: 'white',
                                    border: '1px solid black',
                                }}></div>
                            <div
                                className='green'
                                style={{
                                    background: 'green',
                                    border: '1px solid green',
                                }}></div>
                        </div>
                        <table className='mt-3 moreDetail'>
                            <tbody>
                                <tr>
                                    <th>Size</th>
                                    <td className='ps-5'>{product.size} </td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td className='ps-5 py-4'>
                                        {product.description}
                                    </td>
                                </tr>
                                {product.material ? (
                                    <tr>
                                        <th>Material</th>
                                        <td className='ps-5'>
                                            {product.material}{' '}
                                        </td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <th>ModelNumber</th>
                                        <td className='ps-5'>
                                            {product.ModelNumber}{' '}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className='border my-3'></div>
                        <div>
                            <h2 style={{ color: '#404040' }}>
                                {' '}
                                <sup>$</sup>
                                {product.price}
                            </h2>
                        </div>
                        <div className='my-3'>
                            <Button
                                className='addtocart'
                                onClick={() => checkCart(product.id)}>
                                ADD TO CART
                            </Button>

                            <Button
                                className='ms-3 wishlist'
                                style={{
                                    background: '#474747',
                                    border: 'none',
                                }}>
                                <AiFillHeart
                                    size={30}
                                    onClick={() => AddWishlist(product.id)}
                                    style={style}
                                />
                            </Button>
                            <Toast
                                className='mt-1 text-white'
                                style={{
                                    background: '#474747',
                                    border: 'none',
                                }}
                                onClose={() => setShow(false)}
                                show={show}
                                delay={1000}
                                autohide>
                                <Toast.Body>
                                    Add item to their cart !
                                </Toast.Body>
                            </Toast>
                            <Toast
                                className='mt-1 text-white'
                                style={{
                                    background: '#474747',
                                    border: 'none',
                                }}
                                onClose={() => setShowW(false)}
                                show={showW}
                                delay={3000}
                                autohide>
                                <Toast.Body>
                                    {style.color === 'red'
                                        ? 'Added to Your Wishlist'
                                        : 'Removed from your Wishlist'}
                                </Toast.Body>
                            </Toast>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ProductView;
