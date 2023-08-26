import React, { useReducer, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Image from '../../components/Image';

const intialdata = {
    name: '',
    mobile: '',
    pincode: '',
    state: '',
    address: '',
    town: '',
    district: '',
};

const ACTION = {
    ADD_ADDRESS: 'add-address',
    REMOVE_ADDRESS: 'remove-address',
    EDIT_ADDRESS: 'edit-address',
};

const reduce = (address, action) => {
    switch (action.type) {
        case ACTION.ADD_ADDRESS:
            return [...address, { id: Date.now(), ...action.payload.data }];

        case ACTION.REMOVE_ADDRESS:
            return address.filter(add => add.id !== action.payload.id);

        case ACTION.EDIT_ADDRESS:
            const { data } = action.payload;
            return address.map(add => (add.id === data.id ? data : add));
        default:
            return address;
    }
};
export default function Address() {
    const [address, dispatch] = useReducer(reduce, []);
    const [data, setData] = useState(intialdata);

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const submit = e => {
        e.preventDefault();
        if (data.id) {
            dispatch({ type: ACTION.EDIT_ADDRESS, payload: { data } });
        } else {
            dispatch({ type: ACTION.ADD_ADDRESS, payload: { data } });
        }
        setData(intialdata);
        handleClose();
    };

    const edit = detail => {
        handleShow();
        setData(pre => ({
            ...pre,
            ...detail,
        }));
    };

    const remove = id => {
        dispatch({ type: ACTION.REMOVE_ADDRESS, payload: { id } });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='border p-5'>
                {address.length ? (
                    <div>
                        <div className='mb-4 d-flex justify-content-between align-items-center'>
                            <h5>Saved Addresses</h5>
                            <Button
                                className='addAddress px-4 py-2'
                                onClick={handleShow}>
                                {' '}
                                + ADD NEW ADDRESS
                            </Button>
                        </div>
                        <h6>DEFAULT ADDRESS</h6>
                        <div>
                            {address.map(detail => {
                                return (
                                    <div
                                        className='mt-4 p-4'
                                        style={{
                                            boxShadow:
                                                '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
                                        }}>
                                        <h6>{detail.name}</h6>
                                        <p className='m-0'>{detail.address}</p>
                                        <p className='m-0'>{detail.town}</p>
                                        <p className='m-0'>
                                            {detail.district} - {detail.pincode}
                                        </p>
                                        <p className='m-0'>{detail.state}</p>
                                        <p className='m-0'>
                                            Mobile - {detail.mobile}
                                        </p>
                                        <div className='mt-4 d-flex justify-content-around align-items-center'>
                                            <Button
                                                className='addAddress px-5 py-2 w-50 me-3'
                                                onClick={() => edit(detail)}>
                                                Edit
                                            </Button>

                                            <Button
                                                className='addAddress px-5 py-2 w-50'
                                                onClick={() =>
                                                    remove(detail.id)
                                                }>
                                                {' '}
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div
                        className='d-flex align-items-center justify-content-center flex-column'
                        style={{
                            width: '100%',
                            minHeight: '70vh',
                        }}>
                        <Image
                            name='shopping/address.svg'
                            style={{
                                height: '200px',
                            }}
                        />
                        <h5>SAVE YOUR ADDRESS NOW</h5>
                        <p className='mt-3'>
                            Add your home and office addresses and enjoy faster
                            checkout
                        </p>
                        <Button
                            className='addAddress px-4 py-2'
                            onClick={handleShow}>
                            {' '}
                            + ADD NEW ADDRESS
                        </Button>
                    </div>
                )}

                <Modal show={show} onHide={handleClose}>
                    <Form onSubmit={submit}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD NEW ADDRESS</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    name='name'
                                    value={data.name}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder='Name'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    name='mobile'
                                    value={data.mobile}
                                    onChange={handleChange}
                                    type='number'
                                    placeholder='Mobile'
                                    autoFocus
                                />
                            </Form.Group>
                            <div className='d-flex'>
                                <Form.Group
                                    className='mb-3  w-50'
                                    controlId='formBasicEmail'>
                                    <Form.Control
                                        name='pincode'
                                        value={data.pincode}
                                        onChange={handleChange}
                                        type='number'
                                        className='w-100'
                                        placeholder='Pincode'
                                    />
                                </Form.Group>

                                <Form.Group
                                    className='mb-3 w-50 ms-3'
                                    controlId='formBasicPassword'>
                                    <Form.Control
                                        name='state'
                                        value={data.state}
                                        onChange={handleChange}
                                        type='text'
                                        className='w-100'
                                        placeholder='State'
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    name='address'
                                    value={data.address}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder='Addesss (House No , Building ,street Area)'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    name='town'
                                    value={data.town}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder='Locality/Town'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    name='district'
                                    value={data.district}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder='City/District'
                                    autoFocus
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className='flex-nowrap'>
                            <Button
                                variant='secondary'
                                className='w-50'
                                onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                type='submit'
                                onClick={submit}
                                variant='primary'
                                className='w-50 movetowishbtn '>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </section>
        </>
    );
}
