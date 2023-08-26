import React, { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import productdetail from '../services/productdetail';
import Image from './Image';
function ProductCard(props) {
    const [product, setProduct] = useState(null);

    const filter = useMemo(() => {
        console.log('useMemo');
        return props.category
            ? productdetail.filter(
                  product => product.category === props.category
              )
            : productdetail;
    }, [props.category]);

    useEffect(() => {
        setProduct(filter);
    }, []);

    console.log(product);

    return (
        <>
            {product?.map(product => {
                const { id, name, price, size, image, description, category } =
                    product;
                return (
                    <Col lg={3} md={6} sm={12} className='product'>
                        <Link
                            // onClick={() => handleChnage(id)}
                            to={`/view/${id}`}
                            className='product1 card text-dark'
                            style={{ cursor: 'pointer', height: '90%' }}>
                            <div style={{ overflow: 'hidden' }}>
                                <Image name={image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <p>
                                    <s className='pe-3'>$100.00</s> {price}
                                </p>
                            </Card.Body>
                        </Link>
                    </Col>
                );
            })}
        </>
    );
}
export default ProductCard;
