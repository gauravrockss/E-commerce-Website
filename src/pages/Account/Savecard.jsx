import React from 'react';
import Image from '../../components/Image';

function Savecard() {
    return (
        <>
            <div
                className='d-flex align-items-center justify-content-center flex-column border pb-5'
                style={{
                    width: '100%',
                    minHeight: '70vh',
                }}>
                <Image
                    className='my-3'
                    name='shopping/savecard.svg'
                    style={{
                        height: '150px',
                    }}
                />
                <h6 className='mt-2'>
                    SAVE YOUR CREDIT/DEBIT CARDS DURING PAYMENT
                </h6>
                <p
                    className='mt-3 text-center'
                    style={{
                        maxWidth: '400px',
                    }}>
                    It's convenient to pay with saved cards. Your card
                    information will be secure, we use 128-bit encryption
                </p>
            </div>
        </>
    );
}

export default Savecard;
