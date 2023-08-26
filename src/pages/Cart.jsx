import { React, useState } from 'react';
import { ImBin } from 'react-icons/im';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    ModalBody,
    Row,
    Table,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from '../components/Image';
import { useContext } from 'react';
import { functions } from '../components/Header';
import { TbBoxModel } from 'react-icons/tb';
import productdetail from '../services/productdetail';
import { RxCross2 } from 'react-icons/rx';
import { BsBookmark } from 'react-icons/bs';

function Cart() {
    const { cart, setCart, wishlist, setWishlist } = useContext(functions);
    // cart

    const [delivery, setDelivery] = useState(0);

    console.log('render');

    // delivery

    const deliveryChange = e => {
        const { value } = e.target;
        setDelivery(value);
    };
    // quantity

    const decrement = id => {
        const updateCart = cart.map(pro => {
            if (pro.id === id)
                if (pro.Quantity > 1) {
                    pro.Quantity -= 1;
                } else {
                    pro.Quantity = 1;
                }
            return pro;
        });
        setCart(updateCart);
    };
    const increment = id => {
        console.log(id);
        const updateCart = cart.map(pro => {
            if (pro.id === id) pro.Quantity += 1;
            return pro;
        });
        setCart(updateCart);
    };

    // remove

    const remove = id => {
        handleShow();
        const updatedCart = cart.filter(product => product.id !== id);

        setCart(updatedCart);
        handleClose();
    };

    const AddWishlist = id => {
        const ExistingProduct = wishlist.find(cur => cur.id === id);

        if (ExistingProduct) {
            const removeWishlist = wishlist.filter(cur => cur.id !== id);
            setWishlist(removeWishlist);
        } else {
            const updatewish = productdetail.find(pro => pro.id === id);

            setWishlist(pre => [...pre, updatewish]);
        }
        const updatedCart = cart.filter(product => product.id !== id);

        setCart(updatedCart);

        handleClose();
    };

    // all remove
    const allRemove = () => {
        setCart([]);
    };

    const allWishlist = cart => {
        setWishlist(cart);
        setCart([]);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='mb-5'>
                <Container>
                    {cart.length ? (
                        <Row>
                            <Col lg={7}>
                                <div className='my-3 d-flex border p-4 justify-content-between align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <p className='m-0'>
                                            Deliver to:{' '}
                                            <strong>GAURAV GUPTA,271305</strong>
                                        </p>
                                        <p className='m-0'>
                                            Maskanwa Bazar Gonda , 120
                                        </p>
                                    </div>
                                    <div>
                                        <Button className='emptyCartbtn'>
                                            CHANGE ADDRESS
                                        </Button>
                                    </div>
                                </div>
                                <div className='my-3 border p-2'>
                                    <h6>Available Offers</h6>
                                    <ul>
                                        <li>
                                            Get Assured Cashback up to Rs 5000
                                            on CRED pay
                                        </li>
                                        <li>
                                            5% Unlimited Cashback on Flipkart
                                            Axis Bank Credit card
                                        </li>
                                        <li>
                                            10% Unlimited Cashback on Flipkart
                                            Axis Bank Credit card
                                        </li>
                                    </ul>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h5>{cart.length} ITEMS</h5>
                                    </div>
                                    <div className='d-flex my-3'>
                                        <h6
                                            onClick={() => allRemove()}
                                            className='pe-3'
                                            style={{
                                                borderRight: '1px solid grey',
                                            }}>
                                            REMOVE
                                        </h6>
                                        <h6
                                            className='ps-3'
                                            onClick={() => allWishlist(cart)}>
                                            WISHLIST
                                        </h6>
                                    </div>
                                </div>

                                {cart.map(product => {
                                    return (
                                        <div className='border p-2 mb-2'>
                                            <div className='cartbin'>
                                                <RxCross2
                                                    onClick={
                                                        () => handleShow()
                                                        // remove(product.id)
                                                    }
                                                />
                                            </div>
                                            <div className=' cartdetails d-flex'>
                                                <div>
                                                    <Image
                                                        name={product.image}
                                                    />
                                                </div>
                                                <div className='ps-4'>
                                                    <h5>{product.name}</h5>
                                                    <p className='m-0'>
                                                        {product.description}
                                                    </p>
                                                    <div className='d-flex quantity align-items-center m-0'>
                                                        <p
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                            className='me-3'
                                                            onClick={() =>
                                                                decrement(
                                                                    product.id
                                                                )
                                                            }>
                                                            -
                                                        </p>
                                                        <h5
                                                            className='pt-2'
                                                            style={{
                                                                fontSize:
                                                                    '20px',
                                                            }}>
                                                            {product.Quantity}
                                                        </h5>
                                                        <p
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                            className='ms-3'
                                                            onClick={() =>
                                                                increment(
                                                                    product.id
                                                                )
                                                            }>
                                                            +
                                                        </p>
                                                    </div>
                                                    <div className='py-1 m-0'>
                                                        <p
                                                            className='m-0'
                                                            style={{
                                                                fontWeight:
                                                                    'bold',
                                                            }}>
                                                            <s className='pe-3'>
                                                                $100.00
                                                            </s>{' '}
                                                            {product.price}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className='m-0 p-0'>
                                                            <strong>
                                                                14 days
                                                            </strong>{' '}
                                                            return available
                                                        </p>
                                                    </div>
                                                    <Modal
                                                        show={show}
                                                        onHide={handleClose}>
                                                        <Modal.Header
                                                            closeButton>
                                                            <h5>
                                                                Move from Bag
                                                            </h5>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            Are you sure you
                                                            want to move this
                                                            item from bag ?
                                                        </Modal.Body>
                                                        <Modal.Footer className='d-flex justify-content-between flex-nowrap'>
                                                            <Button
                                                                variant='secondary w-50'
                                                                onClick={() =>
                                                                    remove(
                                                                        product.id
                                                                    )
                                                                }>
                                                                REMOVE
                                                            </Button>
                                                            <Button
                                                                className='movetowishbtn'
                                                                variant='primary w-50'
                                                                onClick={() =>
                                                                    AddWishlist(
                                                                        product.id
                                                                    )
                                                                }>
                                                                MOVE TO WISHLIST
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className='d-flex border justify-content-between p-3 align-items-center '>
                                    <NavLink
                                        to='/wishlist'
                                        style={{
                                            color: 'black',
                                            fontWeight: '900',
                                        }}>
                                        <BsBookmark className='me-2' />
                                        Add More From Wishlist
                                    </NavLink>
                                    <NavLink
                                        to='/wishlist'
                                        style={{
                                            color: 'black',
                                        }}>
                                        <MdKeyboardArrowRight size='25' />
                                    </NavLink>
                                </div>
                            </Col>
                            <Col lg={4} className='pt-lg-0 pt-2 mt-3'>
                                <div className='right p-3 border'>
                                    <div className='pb-1 text-center'>
                                        <h4>Order Summary</h4>
                                    </div>

                                    <div className='d-flex justify-content-between mt-3'>
                                        <p>Item {cart.length}</p>
                                        <p>
                                            $
                                            {cart?.reduce((int, item) => {
                                                return (
                                                    int +
                                                    parseInt(item.price) *
                                                        item.Quantity
                                                );
                                            }, 0)}
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p>Shipping</p>
                                        <Form.Select
                                            aria-label='Default select example'
                                            onChange={deliveryChange}
                                            value={delivery}
                                            disabled={!cart.length}>
                                            <option disabled value={0}>
                                                Choose delivary
                                            </option>
                                            <option value={10}>
                                                Standard delivary $10
                                            </option>
                                            <option value={5}>
                                                Normal delivary $5
                                            </option>
                                            <option value={15}>
                                                VIP delivary $15
                                            </option>
                                        </Form.Select>
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Group
                                            className='my-2 '
                                            controlId='formBasicEmail'>
                                            <Form.Label>PROMO CODE</Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder='Enter your code'
                                            />
                                        </Form.Group>
                                        <Button
                                            className='px-4 py-2'
                                            style={{
                                                background: '#ff3e6c',
                                                border: 'none',
                                            }}>
                                            APPLY
                                        </Button>
                                    </div>
                                    <div className='title '></div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        <p>Total</p>
                                        <p>
                                            $
                                            {delivery &&
                                                cart.length > 0 &&
                                                parseInt(`${delivery}`) +
                                                    cart.reduce(
                                                        (acc, value) =>
                                                            acc +
                                                            parseInt(
                                                                value.price
                                                            ) *
                                                                parseInt(
                                                                    value.Quantity
                                                                ),
                                                        0
                                                    )}
                                        </p>
                                    </div>
                                    <div className='text-center'>
                                        <Button
                                            className='px-4 py-2  w-100'
                                            style={{
                                                background: '#ff3e6c',
                                                border: 'none',
                                                fontWeight: '900',
                                                letterSpacing: '2px',
                                            }}>
                                            PLACE ORDER
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <div className='empty'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <Image name='shopping/empty-bag.webp' />
                                <h5>Hey,it feels so light!</h5>
                                <p
                                    className='m-auto '
                                    style={{
                                        maxWidth: '400px',
                                        fontSize: '16px',
                                        color: '#949EA5',
                                    }}>
                                    There is nothing in your bag. Let's add some
                                    items
                                </p>
                                <NavLink
                                    className='mt-4 emptyCartbtn btn'
                                    to='/wishlist'>
                                    ADD ITEMS FROM WISHLIST
                                </NavLink>
                            </div>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
}
export default Cart;
