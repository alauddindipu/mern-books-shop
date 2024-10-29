import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <p className='flex justify-center pt-10 text-3xl'>How it Works</p>
        <div className='flex justify-center p-10'>
            <ul className="steps">
                <li className="step step-accent">Register</li>
                <li className="step step-accent">Choose Products</li>
                <li className="step step-success">Purchase</li>
                <li className="step step-success">Receive Products</li>
            </ul>
        </div>
        </div>
    );
}

export default HowItWorks;
