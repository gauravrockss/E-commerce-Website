import React from 'react';
import Image from '../../components/Image';

function Savedvpa() {
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
                    name='shopping/savedvpa.svg'
                    style={{
                        height: '150px',
                    }}
                />
                <h6 className='mt-2'>SAVE YOUR VPA WHILE DOING A PAYMENT</h6>
                <p
                    className='mt-3 text-center'
                    style={{
                        maxWidth: '400px',
                    }}>
                    It's convenient to pay with saved VPAs.
                </p>
            </div>
        </>
    );
}

export default Savedvpa;
