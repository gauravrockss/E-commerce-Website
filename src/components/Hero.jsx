import React from 'react';

const Hero = props => {
    return (
        <div
            className='backgroundimg'
            style={{
                background: `url(${process.env.PUBLIC_URL}Images/shopping/${props.image})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%',
            }}>
            <div className='d-flex align-items-center justify-content-center h-50 p-lg-0 p-5'>
                <h1
                    style={{
                        color: 'black',
                        fontSize: '50px',
                        fontWeight: '900',
                    }}>
                    Upgarde to Your Dream Purchase
                </h1>
            </div>
        </div>
    );
};

export default Hero;
