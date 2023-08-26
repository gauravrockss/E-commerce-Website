import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Laptop() {
    return (
        <>
            <Hero image='hero2.jpg' />
            <section className='my-5'>
                <Container>
                    <h1 className='text-center my-3'>OUR LAPTOP COLLECTION</h1>
                    <div>
                        <Row>
                            <ProductCard category='laptop' />
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}
