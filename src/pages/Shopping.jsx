import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

function Shopping() {
    return (
        <>
            <Hero image='hero.jpg' />
            <section className='my-5'>
                <Container>
                    <h1 className='text-center my-3'>OUR COLLECTION</h1>
                    <div>
                        <Row>
                            <ProductCard />
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}
export default Shopping;
