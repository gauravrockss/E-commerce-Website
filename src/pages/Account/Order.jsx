import React from 'react';
import Image from '../../components/Image';

export default function Order() {
    return (
        <>
            <div
                className='d-flex align-items-center justify-content-center flex-column border pb-5'
                style={{
                    width: '100%',
                    minHeight: '90vh',
                }}>
                <Image
                    name='shopping/order.png'
                    style={{
                        height: '300px',
                    }}
                />
                <h6 className='mt-2'>You haven't placed any order yet!</h6>
                <p
                    className='mt-3 text-center'
                    style={{
                        maxWidth: '400px',
                    }}>
                    Order section is empty. After placing order, You can track
                    them from here!
                </p>
            </div>
        </>
    );
}
