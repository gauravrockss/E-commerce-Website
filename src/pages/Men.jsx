import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Men() {
    return (
        <>
            <Hero image='hero4.jpg' />
            <section className='my-5'>
                <Container>
                    <h1 className='text-center my-3'>OUR MEN COLLECTION</h1>
                    <div>
                        <Row>
                            <ProductCard category='men' />
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}
