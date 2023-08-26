import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Watch() {
    return (
        <>
            <Hero image='hero4.jpg' />
            <section className='my-5'>
                <Container>
                    <h1 className='text-center my-3'>OUR WATCH COLLECTION</h1>
                    <div>
                        <Row>
                            <ProductCard category='watch' />
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}
