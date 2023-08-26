import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import overviewcard from '../../services/overviewcard';

export default function Overview() {
    const [photo, setPhoto] = useState('https://i.stack.imgur.com/l60Hf.png');

    const handlePhotoChange = e => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        setPhoto(fileUrl);
    };

    return (
        <section className='p-4 mb-4'>
            <div
                className='mt-2 account p-2 border d-flex align-items-center justify-content-around'
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
            <div className=''>
                <Row>
                    {overviewcard.map(detail => {
                        return (
                            <Col lg={4} className='gy-4 text-center'>
                                <Card style={{}} className='overviewcards'>
                                    <div
                                        className='d-flex flex-column align-items-center justify-content-center'
                                        style={{
                                            height: '40vh',
                                        }}>
                                        <p
                                            style={{
                                                fontSize: '25px',
                                            }}>
                                            {detail.icon}
                                        </p>

                                        <h6>{detail.title}</h6>

                                        <p
                                            style={{
                                                fontSize: '12px',
                                                color: 'grey',
                                            }}>
                                            {detail.content}
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
}
