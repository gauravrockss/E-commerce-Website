import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from 'react-bootstrap';

export default function Profile() {
    const [photo, setPhoto] = useState('https://i.stack.imgur.com/l60Hf.png');

    const handlePhotoChange = e => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        setPhoto(fileUrl);
    };

    return (
        <section className='border p-4 mb-4'>
            <div
                className='mt-2 account p-4 border d-flex align-items-center justify-content-around'
                style={{ background: '#F5F5F6' }}>
                <div>
                    <img src={photo} />
                </div>
                <div>
                    <Form>
                        <Form.Label>Upload</Form.Label>
                        <Form.Control
                            type='file'
                            required
                            className=''
                            onChange={handlePhotoChange}
                            name='upload'
                        />
                    </Form>
                </div>
            </div>
            <div className='mt-4'>
                <Form>
                    <div className='d-flex'>
                        <Form.Group
                            className='mb-3  w-50'
                            controlId='formBasicEmail'>
                            <Form.Control
                                type='text'
                                className='w-100'
                                placeholder='First Name'
                            />
                        </Form.Group>

                        <Form.Group
                            className='mb-3 w-50 ms-3'
                            controlId='formBasicPassword'>
                            <Form.Control
                                type='text'
                                className='w-100'
                                placeholder='Last Name'
                            />
                        </Form.Group>
                    </div>
                    <div className='d-flex'>
                        <Form.Group
                            className='mb-3  w-50'
                            controlId='formBasicEmail'>
                            <Form.Control
                                type='email'
                                className='w-100'
                                placeholder='Enter email'
                            />
                        </Form.Group>

                        <Form.Group
                            className='mb-3 w-50 ms-3'
                            controlId='formBasicPassword'>
                            <Form.Control
                                type='password'
                                className='w-100'
                                placeholder='Password'
                            />
                        </Form.Group>
                    </div>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Control
                            type='text'
                            className='w-100'
                            placeholder='Location'
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Control
                            type='number'
                            className='w-100'
                            placeholder='+91  Mobile Number'
                        />
                    </Form.Group>
                    <div>
                        <Form.Label>Gender : </Form.Label>
                        <div className='d-flex mb-3'>
                            <div className='d-flex '>
                                <input
                                    type='radio'
                                    aria-label='option 1'
                                    name='gender'
                                />
                                <p className='ms-4 mb-0'>Male</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <input
                                    type='radio'
                                    aria-label='option 1'
                                    name='gender'
                                />
                                <p className='ms-4 mb-0'>Female</p>
                            </div>
                            <div className='d-flex ms-5'>
                                <input
                                    type='radio'
                                    aria-label='option 1'
                                    name='gender'
                                />
                                <p className='ms-4 mb-0'>Custome</p>
                            </div>
                        </div>
                    </div>
                    <FloatingLabel
                        controlId='floatingInput'
                        label='Birthday(dd/mm/yyyy)'
                        className='mb-3'>
                        <Form.Control
                            type='number'
                            placeholder='name@example.com'
                        />
                    </FloatingLabel>
                    <div>
                        <Button
                            variant='primary'
                            type='submit'
                            className='w-100 profile-btn'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </section>
    );
}
