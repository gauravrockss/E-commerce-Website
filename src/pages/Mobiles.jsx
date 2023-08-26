import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';

import ProductCard from '../components/ProductCard';

export default function Mobiles() {
    return (
        <>
            <Hero image='hero3.jpg' />
            <section className='my-5'>
                <Container>
                    <h1 className='text-center my-3'>OUR MOBILE COLLECTION</h1>
                    <div>
                        <Row>
                            <ProductCard category='mobile' />
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}
